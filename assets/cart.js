var containsWanderTote = false,
    containsWhimsTote = false;

class CartRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      this.closest('cart-items').updateQuantity(this.dataset.index, 0);
    });
  }
}
customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status');
    this.currentItemCount = Array.from(this.querySelectorAll('[name="updates[]"]'))
      .reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0);
    this.debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, 300);
    this.addEventListener('change', this.debouncedOnChange.bind(this));
  }

  onChange(event) {
    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents',
      }
    ];
  }

  updateQuantity(line, quantity, name) {
    this.enableLoading(line);
    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, {...fetchConfig(), ...{ body }})
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        console.log(parsedState)
        this.classList.toggle('is-empty', parsedState.item_count === 0);
        document.getElementById('main-cart-footer')?.classList.toggle('is-empty', parsedState.item_count === 0);


        this.getSectionsToRender().forEach((section => {
          const elementToReplace =
            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);

          elementToReplace.innerHTML =
            this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        }));

        this.updateLiveRegions(line, parsedState.item_count);
        document.getElementById(`CartItem-${line}`)?.querySelector(`[name="${name}"]`)?.focus();
        this.disableLoading();
      }).then(() => {
        getDiscounts();
        checkCartConditions();
      })
      .catch(() => {
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        document.getElementById('cart-errors').textContent = window.cartStrings.error;
        this.disableLoading();
      });
  }

  updateLiveRegions(line, itemCount) {
    if (this.currentItemCount === itemCount) {
      document.getElementById(`Line-item-error-${line}`)
        .querySelector('.cart-item__error-text')
        .innerHTML = window.cartStrings.quantityError.replace(
          '[quantity]',
          document.getElementById(`Quantity-${line}`).value
        );
    }

    this.currentItemCount = itemCount;
    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    document.getElementById('main-cart-items').classList.add('cart__items--disabled');
    this.querySelectorAll('.loading-overlay')[line - 1].classList.remove('hidden');
    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading() {
    document.getElementById('main-cart-items').classList.remove('cart__items--disabled');
  }
}

customElements.define('cart-items', CartItems);

$(function() {
  getDiscounts();
  //get affiliate cookie  
  if (localStorage.getItem('affiliate_sales_cookie') != null) {
    $("input[name='attributes[cookie_id]']").val(localStorage.getItem('affiliate_sales_cookie'));
  };
  if (localStorage.getItem('affiliate_sales_omni') != null) {
    $("input[name='attributes[omni_id]']").val(localStorage.getItem('affiliate_sales_omni'));
  };
});

function getDiscounts() { 

  var now = $.now(),
      ncmStart = new Date("03/01/22").getTime(), 
      ncmEnd = new Date("03/31/22").getTime(),
	  isNcm = (now >= ncmStart) && (now <= ncmEnd);

      if (isNcm) {
        codes = [{"code":"NCM15","min":0,"max":150,"amount":15},{"code":"NCM20","min":150,"max":250,"amount":20},{"code":"NCM25","min":250,"max":1000000,"amount":25}],
        cartTotal = parseInt($(".totals").attr("data-originaltotalprice"))/100,
        discountAmount = codes.filter((i,e,) => {return cartTotal >= i["min"] && cartTotal < i["max"]})[0]["amount"],
        discountCode = codes.filter((i,e,) => {return cartTotal >= i["min"] && cartTotal < i["max"]})[0]["code"];
        //
        var formUrl = $("form#cart").attr("action");
        $("form#cart").attr("action",formUrl+'?discount='+discountCode);

        //
        $(".totals__subtotal-value").html("<s> $"+cartTotal.toFixed(2)+"</s>  $"+parseFloat(cartTotal*(1-(discountAmount/100))).toFixed(2));
        $(".totals").after("<p class='totals_subtotal-discountAmount'>You're saving "+discountAmount+"% for National Crochet Month with code "+discountCode+"</p>");	
	};
 };




function checkFNIKPattern () {
  // free box check
  var itemCount = 0,
      cartsubtotal = 0,
      cartRows = $(".cart-item"),
      isHook = false,
      isYarn = false,
      hookCount = 0,
      yarnCount = 0;

  //count hooks and enable/disable checkout
    $.each(cartRows, function(i, row){
      //count hooks
      var row = $(row);
      
      isHook = row.find(".cart-item__name").text().toLowerCase().includes("crochet hook");
      isGalaxyHook = row.find(".cart-item__name").text().toLowerCase().includes("streamline");
      isYarn = row.find(".cart-item__name").text().toLowerCase().includes("yarn");    

      if(isHook || isGalaxyHook) {
        hookCount += parseFloat($(row).find('.quantity__input').val());
      }
      
      if(isYarn) {
        yarnCount += parseFloat($(row).find('.quantity__input').val());
      }
    });
      
  // enable/disable checkout
  if (hookCount >= 1 && yarnCount >= 1) {
    $(".cart__checkout-button").prop('disabled', false);
    //change message
    $(".kitWarning").remove();
    //$(".change-box-message").html("<span class='fake-link'>Want to use tier discounts instead? Click here to change your FREE box to a $10 box and you'll get access to the tiers</span>");
  } else {
    $(".cart__checkout-button").prop('disabled', true);
    //update cart
    //$("#cart_form").attr("action", "/cart");
    //change message
    if($('.kitWarning').length == 0) {
      $("<span class='kitWarning'><i class='fa fa-fw fa-info'></i> Furls Night In Kits must include 1 hook and 1 skein of yarn</span>").insertAfter(".cart__checkout-button");
    }
  };
};


function checkWristlet () {
  // free wristlet check
    var wristletQty = $("input[data-vid='39636482818115']").val(),
        irisQty = $("input[data-pid='6609032970307']").map((i,e)=>parseInt($(e).val())).toArray().reduce((a,b) => a + b, 0);
    console.log('wristletQty - ' + wristletQty)
    console.log('irisQty - ' + irisQty)
    console.log("remove condition - " + (wristletQty && irisQty < 2))
    if (wristletQty && irisQty < 2) {
      console.log('removing wristlet')
      var wristletLine = $("input[data-vid='39636482818115']").closest('.cart-item').attr("id").split("-")[1];
      if (wristletLine) document.querySelector('cart-items').updateQuantity(wristletLine,0);
    }

};

function checkWanderTote () {
  // free tote check
  var totes = $("input[data-vid='32315749105731']").val(),
      wanderCount = $("input[data-pid='6596468801603']").map((i,e)=>parseInt($(e).val())).toArray().reduce((a,b) => a + b, 0);

  if (totes) {
    // enable/disable checkout
    if (wanderCount/totes < 5) {
        //disable checkout button + hide dynamic payments
        disableCheckout();
        renderCheckoutError("wanderError","<i class='fa fa-fw fa-info'></i> Please adjust wander quantities.");
       
    } else if(totes > 3) {
        //disable checkout button + hide dynamic payments
        disableCheckout();
        renderCheckoutError("wanderError","<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.");

    } else {
      enableCheckout();
    };
  } else {
      enableCheckout();
  };
};

function checkWhimsTote () {
  // free tote check
  var totes = $("input[data-vid='39406219034691']").val(),
      wanderCount = 0;
    
  setTimeout(function() {
    var itemCount = 0,
        cartsubtotal = 0,
        cartRows = $(".cart-item"),
        isNeedle = false,
        isYarn = false,
        needleCount = 0,
        yarnCount = 0;
  
    //count hooks and enable/disable checkout
    $.each(cartRows, function(i, row){
      //count hooks
      var row = $(row);
      
      isNeedle = row.find(".cart-item__details").text().toLowerCase().includes("knitting needles");
      isYarn = row.find(".cart-item__details").text().toLowerCase().includes("whims merino crochet yarn");    
      
      if(isNeedle) {
        needleCount += parseFloat($(row).find('.quantity__input').val());
      }
      
      if(isYarn) {
        yarnCount += parseFloat($(row).find('.quantity__input').val());
      }
    });

    if (totes) {
      // enable/disable checkout
      if (totes == 1 && (needleCount < 1 || yarnCount < 1) ||
          totes == 2 && (needleCount < 2 || yarnCount < 2) ||
          totes == 3 && (needleCount < 3 || yarnCount < 3)) {
          $(".cart__checkout-button").prop('disabled', true);
          $(".cart__dynamic-checkout-buttons").hide();
          
        if($('.whimsError').length == 0) {
          let whimsError = document.createElement('div');
          $(whimsError).addClass('whimsError');
          $(whimsError).html("<i class='fa fa-fw fa-info'></i> You have "+totes+" FREE tote"+((totes>1)?'s':'')+" in your cart. Please add more knitting needles or whims merino yarn.")
          $(whimsError).insertAfter($('.cart__checkout-button.button'));
        } else {
          $('.whimsError').html("<i class='fa fa-fw fa-info'></i> You have "+totes+" FREE tote"+((totes>1)?'s':'')+" in your cart. Please add more knitting needles or whims merino yarn.")
        }
      } else if(totes > 3) {
          $(".cart__checkout-button").prop('disabled', true);
          $(".cart__dynamic-checkout-buttons").hide();

          if($('.whimsError').length == 0) {
            let whimsError = document.createElement('div');
            $(whimsError).addClass('whimsError');
            $(whimsError).html("<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.")
            $(whimsError).insertAfter($('.cart__checkout-button.button'));
          } else {
            $('.whimsError').html("<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.")
          }
      } else {
        $(".cart__checkout-button").prop('disabled', false);
        
        $('.whimsError').remove();
       };
    } else {
      $(".cart__checkout-button").prop('disabled', false);

      $('.whimsError').remove();
    };
  }, 500);
};

function checkWanderAndWhimsTote () {
  // free tote check
  var wanderTotes = $("input[data-vid='32315749105731']").val(),
      wanderCount = 0,
      whimsTotes = $("input[data-vid='39406219034691']").val(),
      itemCount = 0,
      cartsubtotal = 0,
      cartRows = $(".cart-item"),
      isNeedle = false,
      isYarn = false,
      needleCount = 0,
      yarnCount = 0;

  $.each($("input[data-pid='6596468801603']"), function(i,t) {
    var quantity = parseInt($(this).val());
    wanderCount += quantity;
  });

  //count hooks and enable/disable checkout
  $.each(cartRows, function(i, row){
    //count hooks
    var row = $(row);
    
    isNeedle = row.find(".cart-item__details").text().toLowerCase().includes("knitting needles");
    isYarn = row.find(".cart-item__details").text().toLowerCase().includes("whims merino crochet yarn");    
    
    if(isNeedle) {
      needleCount += parseFloat($(row).find('.quantity__input').val());
    }
    
    if(isYarn) {
      yarnCount += parseFloat($(row).find('.quantity__input').val());
    }
  });

  // enable/disable checkout
  if (wanderTotes == 1 && wanderCount < 5 ||
      wanderTotes == 2 && wanderCount < 10 ||
      wanderTotes == 3 && wanderCount < 15) {
      $(".cart__checkout-button").prop('disabled', true);
      $(".cart__dynamic-checkout-buttons").hide();

      if($('.wanderError').length == 0) {
        let wanderError = document.createElement('div');
        $(wanderError).addClass('wanderError');
        $(wanderError).html("<i class='fa fa-fw fa-info'></i> You have "+wanderTotes+" FREE tote"+((wanderTotes>1)?'s':'')+" in your cart. Please add more <a href='/products/acrylic-crochet-yarn'>Wander Acrylic Yarn</a>.")
        $(wanderError).insertAfter($('.cart__checkout-button.button'));
      } else {
        $('.wanderError').html("<i class='fa fa-fw fa-info'></i> You have "+wanderTotes+" FREE tote"+((wanderTotes>1)?'s':'')+" in your cart. Please add more <a href='/products/acrylic-crochet-yarn'>Wander Acrylic Yarn</a>.")
      }
  } else if(wanderTotes > 3) {
      $(".cart__checkout-button").prop('disabled', true);
      $(".cart__dynamic-checkout-buttons").hide();

      if($('.wanderError').length == 0) {
        let wanderError = document.createElement('div');
        $(wanderError).addClass('wanderError');
        $(wanderError).html("<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.")
        $(wanderError).insertAfter($('.cart__checkout-button.button'));
      } else {
        $('.wanderError').html("<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.")
      }
  } else if (whimsTotes == 1 && (needleCount < 1 || yarnCount < 1) ||
      whimsTotes == 2 && (needleCount < 2 || yarnCount < 2) ||
      whimsTotes == 3 && (needleCount < 3 || yarnCount < 3)) {
      $(".cart__checkout-button").prop('disabled', true);
      $(".cart__dynamic-checkout-buttons").hide();
      
    if($('.whimsError').length == 0) {
      let whimsError = document.createElement('div');
      $(whimsError).addClass('whimsError');
      $(whimsError).html("<i class='fa fa-fw fa-info'></i> You have "+whimsTotes+" FREE tote"+((whimsTotes>1)?'s':'')+" in your cart. Please add more knitting needles or whims merino yarn.")
      $(whimsError).insertAfter($('.cart__checkout-button.button'));
    } else {
      $('.whimsError').html("<i class='fa fa-fw fa-info'></i> You have "+whimsTotes+" FREE tote"+((whimsTotes>1)?'s':'')+" in your cart. Please add more knitting needles or whims merino yarn.")
    }
  } else if(whimsTotes > 3) {
      $(".cart__checkout-button").prop('disabled', true);
      $(".cart__dynamic-checkout-buttons").hide();

      if($('.whimsError').length == 0) {
        let whimsError = document.createElement('div');
        $(whimsError).addClass('whimsError');
        $(whimsError).html("<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.")
        $(whimsError).insertAfter($('.cart__checkout-button.button'));
      } else {
        $('.whimsError').html("<i class='fa fa-fw fa-info'></i> Only 3 totes per order, please remove a tote.")
      }
  } else {
    $(".cart__checkout-button").prop('disabled', false);
    
    $('.whimsError').remove();
    $('.wanderError').remove();
   };
}

function checkKit () {

  var yarnCount = $("input[data-pid='4528867147843']").map((i,e)=>parseInt($(e).val())).toArray().reduce((a,b) => a + b, 0);

  // enable/disable checkout
  if (yarnCount >= 5) {
    $(".cart__checkout-button").prop('disabled', false);
    //change message
    $(".kitWarning").remove();
    //$(".change-box-message").html("<span class='fake-link'>Want to use tier discounts instead? Click here to change your FREE box to a $10 box and you'll get access to the tiers</span>");
  } else {
    $(".cart__checkout-button").prop('disabled', true);
    //update cart
    //$("#cart_form").attr("action", "/cart");
    //change message
    if($('.kitWarning').length == 0) {
      $("<span class='kitWarning'><i class='fa fa-fw fa-info'></i> Wander Palette Kits must include 5 skeins of Wander yarn</span>").insertAfter(".cart__checkout-button");
    }
  };
};

function checkBox () {
  if($('[data-pid="4609725694019"]').length < 1 &&
     $('[data-pid="6561837776963"]').length < 1 &&
     $('[data-pid="4607774425155"]').length < 1) {
    $(".cart__checkout-button").prop('disabled', true);
    //update cart
    //$("#cart_form").attr("action", "/cart");
    //change message
    if($('.boxWarning').length == 0) {
      $("<span class='boxWarning'><i class='fa fa-fw fa-info'></i> Free gift box must be purchased with an Odyssey, Streamline Wood, or Streamline Swirl hook set.</span>").insertAfter(".cart__checkout-button");
    }
  } else {
    var cartRows = $(".cart-item"),
        isHook = false,
        hookCount = 0;
    //count hooks and enable/disable checkout
    $.each(cartRows, function(i, row){
      //count hooks
      var row = $(row);

      isHook = row.find(".cart-item__name").text().toLowerCase().includes("crochet hook");

      if(isHook) {
        hookCount += parseFloat($(row).find('.quantity__input').val());
      }
    });

    if(hookCount < 3) {
      $(".cart__checkout-button").prop('disabled', true);
      //update cart
      //$("#cart_form").attr("action", "/cart");
      //change message
      if($('.boxWarning').length == 0) {
        $("<span class='boxWarning'><i class='fa fa-fw fa-info'></i> Free gift box must be purchased with an Odyssey, Streamline Wood, or Streamline Swirl hook set.</span>").insertAfter(".cart__checkout-button");
      }
    } else if(parseFloat($('[data-pid="4324053057603"]').find('.quantity__input').val()) > 1) {
      $(".cart__checkout-button").prop('disabled', true);
      //update cart
      //$("#cart_form").attr("action", "/cart");
      //change message
      if($('.boxWarning').length == 0) {
        $("<span class='boxWarning'><i class='fa fa-fw fa-info'></i> Only one free gift box per purchase.</span>").insertAfter(".cart__checkout-button");
      }
    } else {
      $(".cart__checkout-button").prop('disabled', false);
      $(".boxWarning").remove();
    }
  }
};

function checkFreePattern () {
  if($('[data-pid="4609725694019"]').length < 1 &&
     $('[data-pid="6561837776963"]').length < 1 &&
     $('[data-pid="4607774425155"]').length < 1) {
    $(".cart__checkout-button").prop('disabled', true);
    //update cart
    //$("#cart_form").attr("action", "/cart");
    //change message
    if($('.freePatternWarning').length == 0) {
      $("<span class='boxWarning'><i class='fa fa-fw fa-info'></i> Free pattern must be purchased with an Odyssey, Streamline Wood, or Streamline Swirl hook set.</span>").insertAfter(".cart__checkout-button");
    }
  } else {
    var cartRows = $(".cart-item"),
        isHook = false,
        hookCount = 0;
    //count hooks and enable/disable checkout
    $.each(cartRows, function(i, row){
      //count hooks
      var row = $(row);

      isHook = row.find(".cart-item__name").text().toLowerCase().includes("crochet hook");

      if(isHook) {
        hookCount += parseFloat($(row).find('.quantity__input').val());
      }
    });

    if(hookCount < 3) {
      $(".cart__checkout-button").prop('disabled', true);
      //update cart
      //$("#cart_form").attr("action", "/cart");
      //change message
      if($('.freePatternWarning').length == 0) {
        $("<span class='boxWarning'><i class='fa fa-fw fa-info'></i> Free pattern must be purchased with an Odyssey, Streamline Wood, or Streamline Swirl hook set.</span>").insertAfter(".cart__checkout-button");
      }
    } else {
      $(".cart__checkout-button").prop('disabled', false);
      $(".freePatternWarning").remove();
    }
  }
};


function checkCartConditions () {
  console.log("inside checkCartConditions");

  var vids = $('.quantity__input').map((i,e)=>$(e).attr('data-vid')).toArray(),
      pids = $('.quantity__input').map((i,e)=>$(e).attr('data-pid')).toArray();

      //furls night in kit condition
      if (vids.includes("31517066428483")) checkFNIKPattern();

      //furls kit condition
      if (vids.includes("39278454407235")) checkKit();

      //iris wristlet condition
      if (vids.includes("39636482818115")) checkWristlet();

      //wander tote condition
      if (vids.includes("32315749105731")) containsWanderTote = true;

      //whims tote condition
      if (vids.includes("39406219034691")) containsWhimsTote = true;

      //free box condition
      if (vids.includes("31075850387523")) checkBox();

      //free pattern condition
      if (vids.includes("39398563217475")) checkFreePattern();


    if(containsWanderTote && containsWhimsTote) {
      checkWanderAndWhimsTote();
    } else if (containsWanderTote && !containsWhimsTote) {
      checkWanderTote();
    } else if (containsWhimsTote && !containsWanderTote) {
      checkWhimsTote();
    } 

};

function disableCheckout () {
      $(".cart__checkout-button").prop('disabled', true);
      $(".cart__dynamic-checkout-buttons").hide();
};

function enableCheckout () {
      $(".cart__checkout-button").prop('disabled', false);
      $(".cart__dynamic-checkout-buttons").show();
};

function renderCheckoutError (classname, message) {
  var errorElement = $("."+classname+"");

   if(errorElement.length == 0) {
          let errorElement = document.createElement('div');
          $(errorElement).addClass(classname);
          $(errorElement).html(message);
          $(errorElement).insertAfter($('.cart__checkout-button.button'));
  } else {
          $(errorElement).html(message);
  };
};




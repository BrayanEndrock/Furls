$(function() {

  var colorCount = 0,
      sizeCount = 0;

  if($('.js.product-form__input').is(':visible')) {
    $('input[name="Color"]').each(function() {
      colorCount += 1;
    });

    $('input[name="Size"]').each(function() {
      sizeCount += 1;
    });

    if(sizeCount == 1) {
      $('input[name="Size"]').click();
    } else {
      $('input[name="Size"]').prop('checked', false);
    }

    if(colorCount == 1) {
      $('input[name="Color"]').click();
    } else {
      $('input[name="Color"]').prop('checked', false);
    }

    if(($('input[name="Size"]').prop('checked') == true && $('input[name="Color"]').prop('checked') == undefined) ||
       ($('input[name="Color"]').prop('checked') == true && $('input[name="Size"]').prop('checked') == undefined) || 
      ($('input[name="Color"]').prop('checked') == true && $('input[name="Size"]').prop('checked') == true)) {
      
    } else {
      $('.product-form__submit.button.button--full-width.button--secondary').text('Choose options');
    }
  }

  var slider = tns({
    "container": ".productImageCarousel",
    "controlsContainer": ".productImageControls", 
    "items": 1,
    "navContainer": ".productImageCarouselThumbnails",
    "navAsThumbnails": true,
    "autoplay": true,
    "speed": 400
  });

  $('.notifyMeCheckbox label').on('click', function(){
    if ($('#customer_accepts_marketing').val() == "1") {
      $('#customer_accepts_marketing').val("");
    } else {
      $('#customer_accepts_marketing').val("1");
    }
  });

  $('.notifyForm').parsley();

  $('#notifyForm').on('submit', function(e) {
    e.preventDefault();

    if ($('.notifyForm').parsley().isValid()) {
      if ($('#customer_accepts_marketing').val() == "1") {
        SI.create($('#notify_email').val(), $('.notifyForm select').find(":selected").val(), $('.notifyForm select').find(":selected").attr('product_id'), { accepts_marketing: true});
      } else {
        SI.create($('#notify_email').val(), $('.notifyForm select').find(":selected").val(), $('.notifyForm select').find(":selected").attr('product_id'));
      }

      $('.notifySuccess').show();
    }
  });
});

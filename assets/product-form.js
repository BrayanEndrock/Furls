class ProductForm extends HTMLElement {
  constructor() {
    super();   

    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
    this.cartNotification = document.querySelector('cart-notification');
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    this.cartNotification.setActiveElement(document.activeElement);
    
    const submitButton = this.querySelector('[type="submit"]');

    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('loading');

    this.inputs = this.form.querySelectorAll("input[name='id']")

    if (this.inputs.length > 1) {
      var itemsArray = [];
      Array.from(this.inputs).forEach(i=>itemsArray.push({'id':i.value,'quantity':'1'}));
      var serializedForm = {'items':itemsArray};
    } else {
      var serializedForm = JSON.parse(serializeForm(this.form));
    }

    const body = JSON.stringify({
      ...serializedForm,
      sections: this.cartNotification.getSectionsToRender().map((section) => section.id),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
      .then((response) => response.json())
      .then((parsedState) => {
        this.cartNotification.renderContents(parsedState);
        //checkFreeProduct(parsedState);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        submitButton.classList.remove('loading');
        submitButton.removeAttribute('disabled');
      });
  }

}

customElements.define('product-form', ProductForm);



function checkFreeProduct (initialParsedState)  {
  //check for free product condition
  var targetProductId = 6596480401475; //current: whims merino yarn
    if (initialParsedState.product_id == targetProductId) {
        var cartContents = fetch('/cart.js')
        .then(response => response.json())
        .then(data => { 
          var targetQty = data.items.filter(obj => { return obj.product_id == targetProductId } ).map(obj => obj.quantity).reduce((a,b) => a + b, 0);
          var targetThreshold = 5;
          var freeProductId = 39406219034691; //current, whims tote
          var freeQty = data.items.filter(obj => { return obj.variant_id == freeProductId } ).map(obj => obj.quantity).reduce((a,b) => a + b, 0);
            //if iris
            if (!freeQty && targetQty >= targetThreshold) {
                //add wristlet to cart
                  let formData = JSON.stringify({
                      'items': [{
                      'id': freeProductId,
                      'quantity': 1}],
                      sections: document.querySelector('cart-notification').getSectionsToRender().map((section) => section.id),
                      sections_url: window.location.pathname
                    });
                  fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body: formData })
                    .then((response) => response.json())  
                    .then((parsedState) => {
                    console.log("adding free product");
                      //document.querySelector('cart-notification').renderContents(parsedState);
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                    });
            };
        });
    }
};



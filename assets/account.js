$(function() {

  $('#customer_login').parsley();
  $('#recover_customer_password').parsley();
  $('#create_customer').parsley();

  if(window.location.href.indexOf("register") > -1) {
    $('.customerEmailHidden').val(sessionStorage.getItem('customer-email'));
  }

  $('.question').on('click', function() {
    console.log('clicked');
    if($(this).closest('.answer').is(':visible')) {
      $(this).closest('.answer').hide();
    } else {
       $(this).closest('.answer').css('display', 'inline-block');
    }
  });

   setTimeout(function() {
     $('.tier0Rewards').insertAfter($('.lion-tier-box--0 .lion-tier-box__purchase-rule'));
     $('.tier1Rewards').insertAfter($('.lion-tier-box--1 .lion-tier-box__purchase-rule'));
     $('.tier2Rewards').insertAfter($('.lion-tier-box--2 .lion-tier-box__purchase-rule'));
     $('#loyaltylion').hide();
   }, 1000);

   if (window.location.hash == '#recover') { showRecoverPasswordForm() }

   $('#newCustomer').on('click', function() {
     $('#customer_password').prop('disabled', true);
     $('#customer_password').removeAttr('aria-required');
     $('#customer_password').removeAttr('data-parsley-required');
     $('#customer_password').css({'background-color':'rgb(238, 238, 238)', 'cursor':'not-allowed'})
   
     //$('#customer_login').removeAttr('method');
     $('#customer_login').attr('action', '/account/register');
   });

   $('#currentCustomer').on('click', function() {
     $('#customer_password').prop('disabled', false);
     $('#customer_password').attr('aria-required', 'true');
     $('#customer_password').attr('data-parsley-required', 'true');
     $('#customer_password').css({'background-color':'#fff', 'cursor':'initial'});

     $('#customer_login').attr('method', 'post');
     $('#customer_login').attr('action', '/account/login');
   });

   $('#customer_login').on('submit', function(e) {
      e.preventDefault();
      
      if($('#newCustomer').attr('checked') == 'checked') {
        sessionStorage.setItem('customer-email', $('#customer_email').val());
        window.location.href = '/account/register';
      } else {
        document.getElementById('customer_login').submit();
      }
   });

   $("form#wholesale_create_customer").on("submit", function(e) {
      var agreed = $("#terms_agree").prop("checked");
      var tax_id = $("input#tax_id").val().trim();
      var store_name = $("input#store_name").val().trim();
      var store_url = $("input#store_url").val().trim();
      var re = new RegExp(/\b([-0-9]+)|(international)\b/i);
      var errCount = 0;
      if(!tax_id.match(re)) {
         alert("Please enter a valid Tax ID. If outside of the USA, enter 'international' into the Tax ID box.");
         errCount++;
      }
      if(store_name.length <= 0) {
         alert("Please enter a Store Name");
         errCount++;
      }
      if(store_url.length <= 0) {
         alert("Please enter a Website URL");
         errCount++;
      }
      if(!agreed) {
         alert("Please agree to Terms and Conditions");
         errCount++;
      }
      if(errCount) { 
         e.preventDefault();
         return;
      }
  });
   
});

function showRecoverPasswordForm() {
   document.getElementById('recover-password').style.display = 'flex';
   document.getElementById('customer').style.display='none';
   return false;
}

function hideRecoverPasswordForm() {
   document.getElementById('recover-password').style.display = 'none';
   document.getElementById('customer').style.display = 'flex';
   return false;
}

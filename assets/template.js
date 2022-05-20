$(function() {
  
   $("body").on("click", "[data-scrollstart]", function(){
     var location = $(this).attr("data-scrollstart"),
         stopAt = $("[data-scrollstop='"+location+"']");
    	 $('html, body').animate({scrollTop: (stopAt.offset().top - 200)}, 500);
  });

  $("body").on("click", ".discount-image, #cta1, #cta2", function(){
    $('html, body').animate({scrollTop: ($(".main-page-title").offset().top)}, 500);
  });
  
  $('.question').on('click', function() {
    if($(this).find('.answer').is(':visible')) {
      $(this).find('.answer').hide();
    } else {
       $(this).find('.answer').css('display', 'inline-block');
    }
  });

   // Allow for cross browser CSS wrapper in case something doesn't look correct 
   // on all browsers
   let userAgent = navigator.userAgent.toLowerCase();
   let css_name = '';

   if(userAgent.indexOf('edg/') != -1) {
    css_name = 'chrome';
   }
   else if(userAgent.indexOf('chrome/') != -1) {
    css_name = 'chrome';
   }
   else if(userAgent.indexOf('firefox/') != -1) {
    css_name = 'firefox';
   }
   else if(userAgent.indexOf('safari/') != -1) {
    css_name = 'safari';
   }

   $('body').addClass(css_name + 'Body');

   $.each($("[data-expiry],[data-start]"),function(i,el){
      var now = $.now(),
          expiry = new Date($(this).data("expiry")).getTime(),
          start = new Date($(this).data("start")).getTime(),
          display_as = getParameterByName("display_as"), 
          eaid = getParameterByName("eaid");

      //if display_as present, reset now variable for comparison
      if (display_as) {
        //format date
        var mm = display_as.substring(0,2),
            dd = display_as.substring(2,4),
            yy = display_as.substring(4,6),
            date = mm + "/" + dd + "/" + yy;
        //set now
        now = new Date(date).getTime();
      };
          
      if ((!expiry && now >= start) || (!start && now < expiry) || (now >= start && now < expiry)) {
        //IF 1. no expiry set & after start, 2. no start set & before expiry, 3. after start & before expiry
          if ($(this).data("appearafter")) {
            var milliseconds = parseInt($(this).data("appearafter"));
            setTimeout(function()  {  $(el).slideDown()  },  milliseconds);
          } else {
            $(el).show();
          };
      } else if (!display_as && !eaid) {
        $(el).remove();
      } else {
       $(el).hide();
       $(el).remove();
      }
   });

   //FUNCTIONS FOR BANNERS
   $.each($("[class$='-banner']:not(.product-form-banner)"), function(i, banner){
      var imgs = $(banner).find("img"),
          links = $(banner).find("a"),
          speed = parseInt($(banner).attr("data-speed")) || 2500,
          counter = 0;

      //show first link
      imgs.eq(counter).closest("a").show();
      //if more than 1 link
      if (imgs.length > 1) {

        //set timer to show other links
       var v =  window.setInterval(function(){        
            links.hide();
            imgs.eq(counter).closest("a").show();
            counter = (counter + 1) % imgs.length;
            if (links.eq(0).attr("href") == "/pages/2020-birthday-bash-with-furls") {
              };
        }, speed);
      };
          
   });
});

//Retrieve a query string parameter
function getParameterByName(name) {
   name = name.replace(/[[]/, "[").replace(/[]]/, "]");
   var regexS = "[?&]" + name + "=([^&#]*)";
   var regex = new RegExp(regexS);
   var results = regex.exec(window.location.href);
   if (results == null)
     return "";
   else
     return decodeURIComponent(results[1].replace(/\+/g, " "));
}

var recordClick = function(omni_id, cookie_id) {
  $.ajax
  ({
    type: "POST",
    contentType: 'application/json',
    //url: 'http://localhost:3000/api/affiliate_clicks',
    url: 'http://returnsy.herokuapp.com/api/affiliate_clicks',
    dataType: 'json',
    async: false,
    data: JSON.stringify({ "omni_id": omni_id, "cookie_id": cookie_id, "path" :location.pathname, "source" :location.search, "org_id" : 1, "domain" : location.origin})
  });
};

if (location.hash.indexOf("#oid=") >= 0) {
  var $hash = location.hash;
  var omniId = $hash.substring($hash.lastIndexOf("oid")+4,$hash.lastIndexOf("oid")+8);
  var cookieId = parseInt(Math.random().toString().replace("0.","").substring(0, 7));

  delete_cookie('affiliate_sales');

  localStorage.setItem('affiliate_sales_omni', omniId);
  localStorage.setItem('affiliate_sales_cookie', cookieId);

  //send click
  recordClick(parseInt(omniId), cookieId);
};

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
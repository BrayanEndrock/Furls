$(function() {
      
  
  if (window.location.pathname == '/pages/leather-sale') {
    	chooseAccessories();
  };

  //   rotate the click notification
    var tierIndex = 0,
        allTiers = $(".tier-wrapper");
     setInterval(function(){
        tierIndex = (tierIndex + 1) % (allTiers.length);
        $(allTiers).css({"opacity":0.8,"text-decoration":"none"});
        $(allTiers[tierIndex]).css({"opacity": 1,"text-decoration":"underline"});
    }, 3000);
    
    
 //Function for starting the chosen toggle
  $("span[data-group='STRM']").attr("data-chosen", "chosen");
  $("[data-groupDisplay='STRM']").css('display','grid');
  
  //Function for changing the group
  $("body").on("click","span[data-group]", function(){
    $('span#click-notify').hide();
    var group = $(this).attr("data-group");
    $("div[data-groupDisplay]").hide();
    $("div[data-groupDisplay='"+group+"']").css('display','grid');
    $("span[data-chosen='chosen']").attr("data-chosen", false);
    $(this).attr("data-chosen", "chosen");
  });

  $("body").on("click","#promo-navigator span, .promoBoxMessage span", function() {
      var anchor = $(this).attr("data-anchor"),
          destination = $("#"+anchor).offset().top - 100;
        $('html, body').animate({scrollTop: destination}, 500);
  });

  $('#giveaway .weekTitle span').on('click', function() {
    let weekClass = $(this).attr('class');

    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $(this).addClass('active');
    $('#giveaway .weekContent span.' + weekClass).addClass('active');
  });

  var now = $.now(),
      week2Start = new Date("06/23/21").getTime(), 
      week2End = new Date("06/24/21").getTime(),
      week3Start = new Date("06/24/21").getTime(), 
      week3End = new Date("06/25/21").getTime(),
      week4Start = new Date("06/25/21").getTime(), 
      week4End = new Date("06/26/21").getTime(),
      week5Start = new Date("06/26/21").getTime(), 
      week5End = new Date("06/27/21").getTime(),
      week6Start = new Date("06/27/21").getTime(), 
      week6End = new Date("06/28/21").getTime(),
      week7Start = new Date("06/28/21").getTime(), 
      week7End = new Date("06/29/21").getTime(),
      week8Start = new Date("06/29/21").getTime(), 
      week8End = new Date("06/30/21").getTime(),
      week9Start = new Date("06/30/21").getTime(), 
      week9End = new Date("06/31/21").getTime();

  if ((now >= week2Start) && (now <= week2End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });
    
    console.log('week2');

    $('#giveaway .weekTitle span.week2').addClass('active');
    $('#giveaway .weekContent span.week2').addClass('active');
  } else if ((now >= week3Start) && (now <= week3End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week3').addClass('active');
    $('#giveaway .weekContent span.week3').addClass('active');
  } else if ((now >= week4Start) && (now <= week4End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week4').addClass('active');
    $('#giveaway .weekContent span.week4').addClass('active');
  } else if ((now >= week5Start) && (now <= week5End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week5').addClass('active');
    $('#giveaway .weekContent span.week5').addClass('active');
  } else if ((now >= week6Start) && (now <= week6End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week6').addClass('active');
    $('#giveaway .weekContent span.week6').addClass('active');
  } else if ((now >= week7Start) && (now <= week7End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week7').addClass('active');
    $('#giveaway .weekContent span.week7').addClass('active');
  } else if ((now >= week8Start) && (now <= week8End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week8').addClass('active');
    $('#giveaway .weekContent span.week8').addClass('active');
  } else if ((now >= week9Start) && (now <= week9End)) {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week9').addClass('active');
    $('#giveaway .weekContent span.week9').addClass('active');
  } else {
    $('#giveaway .weekTitle span, #giveaway .weekContent span').each(function() {
      $(this).removeClass('active');
    });

    $('#giveaway .weekTitle span.week1').addClass('active');
    $('#giveaway .weekContent span.week1').addClass('active');
  };
});


var chooseAccessories = function() {
  setTimeout(function(){
    $("div[data-groupDisplay]").hide();
    $("span[data-chosen='chosen']").attr("data-chosen", false);
    $("div[data-groupDisplay='ACCS']").css('display','grid');
    $("span[data-group='ACCS']").attr("data-chosen", "chosen");
  }, 250);
};
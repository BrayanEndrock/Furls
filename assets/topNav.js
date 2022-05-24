$(function() {
   check();
   
   $(window).resize(function () {
      check();
   });

   // Wholesale Streamline hover
   $('[link-name=StreamlineWood]').on('mouseenter', function(){ 
      $('.WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/streamline-wood-topNav.png?v=1600288386)')
   })

   // Wholesale Streamline swirl hover
   $('[link-name=StreamlineResinHooks]').on('mouseenter', function(){ 
      $('.WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/streamline-swirls-topNav.png?v=1600288389)')
   })

   // Wholesale Odyssey hover
   $('[link-name=OdysseyHooks]').on('mouseenter', function(){ 
      $('.WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/odyssey-topNav.png?v=1600288390)')
   })

   // Wholesale Alpha series hover
   $('#WholesaleProducts .subMenuLink #AlphaSeriesHooks').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/alphas-topNav.png?v=1600288389)')
   })

   // Wholesale Tunisian hover
   $('#WholesaleProducts .subMenuLink #Tunisian').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/tunisians-topNav.png?v=1600288388)')
   })

   // Wholesale Jumbo hover
   $('#WholesaleProducts .subMenuLink #JumboHooks').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/jumbo-hooks-topNav.png?v=1600288888)')
   })

   // Wholesale Single point knitting needles hover
   $('#WholesaleProducts .subMenuLink #SinglePointKnittingNeedles').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/straight-needles-topNav.png?v=1600289466)')
   })

   // Wholesale Whims yarn hover
   $('#WholesaleProducts .subMenuLink #Yarn').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/whims-merino-3column-topNav.png?v=1600356487)')
   })

   // Wholesale Wood Yarn Bowls hover
   $('#WholesaleProducts .subMenuLink #YarnBowls').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/wood-bowls-topNav.png?v=1600290328)')
   })

   // Wholesale Travel Clutches hover
   $('#WholesaleProducts .subMenuLink #TravelClutches').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/products/clutch-extra-forward-transparent_grande.png?v=1493312291)')
   })

   // Wholesale ProjectHandbags hover
   $('#WholesaleProducts .subMenuLink #ProjectHandbags').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/products/FurlsCrochet-LeatherCrochetProject3_grande.jpg?v=1510868666)')
   })

   // Wholesale SingleHookCase hover
   $('#WholesaleProducts .subMenuLink #SingleHookCase').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/products/leather-case-01_grande.jpg?v=1552484615)')
   })

   // Wholesale NeedleCases hover
   $('#WholesaleProducts .subMenuLink #NeedleCases').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/needle-cases-topNav.png?v=1600292577)')
   })

   // Wholesale HookStands hover
   $('#WholesaleProducts .subMenuLink #HookStands').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/5-hook-stands-topNav.png?v=1600291568)')
   })

   // Wholesale Jewelry hover
   $('#WholesaleProducts .subMenuLink #Jewelry').on('mouseenter', function(){ 
      $('#WholesaleProducts .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/jewelry-hook-topNav.png?v=1600357992)')
   })
   
   // Streamline hover
   $('[link-name=StreamlineWood]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/streamline-wood-topNav.png?v=1600288386)')
   })

   // Streamline swirl hover
   $('[link-name=StreamlineResinHooks]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/streamline-resin.jpg?v=1631551327)')
   })

   // Odyssey hover
   $('[link-name=OdysseyHooks]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/odyssey-topNav.png?v=1600288390)')
   })
   
   // Pride hover
   $('[link-name=StreamlinePride]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/pride-hook-five-distance-email.jpg?v=1650402456)')
   })

   // Candy shop hover
   $('[link-name=CandyShopHooks]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/candy-shop-topNav.png?v=1600288390)')
   })

   // Candy shop gelato hover
   // $('#HooksNeedles .subMenuLink #CandyShopGelato').on('mouseenter', function(){ 
   //    $('#CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/candy-gelato-topNav.png?v=1600288390)')
   // })

   // Alpha series hover
   $('[link-name=AlphaSeriesHooks]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/alphas-topNav.png?v=1600288389)')
   })

   // Limited edition hover
   $('[link-name=LimitedEditionHooks]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/le-alphas-topNav.png?v=1600288390)')
   })

   // Tunisian hover
   $('[link-name=Tunisian]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/tunisians-topNav.png?v=1600288388)')
   })

   // Jumbo hover
   // $('#HooksNeedles .subMenuLink #JumboHooks').on('mouseenter', function(){ 
   //    $('#HooksNeedles .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/jumbo-hooks-topNav.png?v=1600288888)')
   // })

   // Single point knitting needles hover
   $('[link-name=SinglePointKnittingNeedles]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/straight-needles-topNav.png?v=1600289466)')
   })
   
   // Hook sets hover
   $('[link-name=HookSets]').on('mouseenter', function(){ 
      $('.CrochetHooks .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/streamline-set-web-square-8.jpeg?v=1608046692)')
   })

   /* Circular knitting needles hover
   $('#HooksNeedles .subMenuLink #CircularKnittingNeedles').on('mouseenter', function(){ 
      $('#HooksNeedles .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/circular-squares_-_4.jpg?v=1579195027)')
   })*/

   // Whims yarn hover
   $('[link-name=WhimsMerinoZTwistYarn]').on('mouseenter', function(){ 
      $('.Yarn .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/whims-merino-3column-topNav.png?v=1600356487)')
   })
   
   // Wander hover
   $('[link-name=WanderAcrylicYarn]').on('mouseenter', function(){ 
      $('.Yarn .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/wander-top-nav.jpeg?v=1612469164)')
   })

   // Wander tote hover
   $('[link-name=WanderTote]').on('mouseenter', function(){ 
      $('.Yarn .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/wander-tote-palette-muskett2.jpeg?v=1614203421)')
   })

   // Wander tote hover
   $('[link-name=WhimsTote]').on('mouseenter', function(){ 
      $('.Yarn .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/whims-boho-knit-kit-small.jpg?v=1622732495)')
   })
   
   // Wander packs hover
   $('[link-name=WanderPalettePacks]').on('mouseenter', function(){ 
      $('.Yarn .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/wander-tote-palette-stark-THEE-shot.jpeg?v=1614203885)')
   })
   
   // Limited edition yarn hover
   // $('#Yarn .subMenuLink #LimitedEditions').on('mouseenter', function(){ 
   //    $('#Yarn .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/LE-Harvest-US-topNav.jpeg?v=1604495517)')
   // })

   // Yarn Bowls hover
   $('[link-name=YarnBowls]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/yarnbowls-topnav_1.jpg?v=1617033224)')
   })

   // Metal Yarn Bowls hover
   // $('#Accessories .subMenuLink #MetalYarnBowls').on('mouseenter', function(){ 
   //    $('#Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/metal-bowls-topNav.png?v=1600290651)')
   // })

   // Odyssey Yarn Bowls hover
   // $('#Accessories .subMenuLink #OdysseyYarnBowls').on('mouseenter', function(){ 
   //    $('#Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/odyssey-bowls-topNav.png?v=1600291240)')
   // })

   // Travel Clutches hover
   $('[link-name=TravelClutches]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/clutches-topnav_1.jpg?v=1617033993)')
   })

   // ProjectHandbags hover
   $('[link-name=ProjectHandbags]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/products/FurlsCrochet-LeatherCrochetProject3_grande.jpg?v=1510868666)')
   })

   // SingleHookCase hover
   $('[link-name=SingleHookCase]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/products/leather-case-01_grande.jpg?v=1552484615)')
   })

   // NeedleCases hover
   $('[link-name=NeedleCases]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/needle-cases-topNav-updated.png?v=1631821884)')
   })

   // WoodenCollectorsBox hover
   $('[link-name=WoodenCollectorsBox]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/collectors-box-topNav.png?v=1600290653)')
   })

   // HookStands hover
   $('[link-name=HookStands]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/hook-stands-topNav_1.jpg?v=1617033993)')
   })

   // 5HookStands hover
   // $('#Accessories .subMenuLink #5HookStands').on('mouseenter', function(){ 
   //    $('#Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/5-hook-stands-topNav.png?v=1600291568)')
   // })

   // 12HookStands hover
   // $('#Accessories .subMenuLink #12HookStands').on('mouseenter', function(){ 
   //    $('#Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/12-hook-holders-topNav.png?v=1600357760)')
   // })

   // Jewelry hover
   $('[link-name=Jewelry]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/jewelry-hook-topNav.png?v=1600357992)')
   })

   // Lucet Fork hover
   $('[link-name=LucetFork]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/files/lucet-topnav_1.jpg?v=1617033224)')
   })

   // Dragon Button hover
   $('[link-name=DragonButtons]').on('mouseenter', function(){ 
      $('.Accessories .calloutBanner').css('background-image','url(https://cdn.shopify.com/s/files/1/0166/0254/products/furls-pewter-dragon-buttons_-_3_grande.jpg?v=1606501000)')
   })

   let count = 0;
   let firstColumn = '';
   let secondColumn = '';
   let thirdColumn = '';

   $('.NewNow li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.NewNow').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.NewNow').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.NewNow').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.WholesaleProducts li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.WholesaleProducts').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.WholesaleProducts').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.WholesaleProducts').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.CrochetHooks li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.CrochetHooks').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.CrochetHooks').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.CrochetHooks').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.Yarn li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Yarn').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Yarn').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Yarn').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.Accessories li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Accessories').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Accessories').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Accessories').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.AboutFurls li').each(function() {
      count += 1;
      if(count >= 1 && count <= 5) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.AboutFurls').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 4 && count <= 10) {
         if(count == 6) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.AboutFurls').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 10 && count <= 16) {
         if(count == 11) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.AboutFurls').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.Patterns li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Patterns').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Patterns').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Patterns').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.Tutorials li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Tutorials').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Tutorials').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Tutorials').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   count = 0;
   firstColumn = '';
   secondColumn = '';
   thirdColumn = '';

   $('.Blog li').each(function() {
      count += 1;
      if(count >= 1 && count <= 6) {
         if(count == 1) {
            firstColumn = document.createElement('div');
            firstColumn.setAttribute('class', 'firstColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Blog').prepend(firstColumn);
         }
         $(firstColumn).append(this);
      }

      if(count > 6 && count <= 12) {
         if(count == 7) {
            secondColumn = document.createElement('div');
            secondColumn.setAttribute('class', 'secondColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Blog').prepend(secondColumn);
         }
         $(secondColumn).append(this);
      }

      if(count > 12 && count <= 18) {
         if(count == 13) {
            thirdColumn = document.createElement('div');
            thirdColumn.setAttribute('class', 'thirdColumn');
            $('.header__submenu.list-menu.list-menu--disclosure.caption-large.motion-reduce.Blog').prepend(thirdColumn);
         }
         $(thirdColumn).append(this);
      }
   });

   $('.searchButton').on('click', function() {
     $('.top_bar_search').toggle();
   });
});

function check () {
   // Mobile only JS
   if($(window).width() <= 750) {
      $('#sticky-list').append($('.cart-not'));
      
      $('.dropdown-inner').append($('#menu'));
      $('#menu').append($('.mobileFooter'));
      $('.mobileFooter').show();
     
     $('a').each(function() {
      if($(this).attr('href') === '/a/wishlist') {
         if($(this).parent().attr('class') != 'subLinks') {
            $(this).remove();
         }
      }
   })

      setTimeout(function(){
         $('#NewNowLink, #WholesaleProductsLink, #HooksNeedlesLink, #YarnLink, #AccessoriesLink, #AboutFurlsLink, #PatternsLink, #TutorialsLink, #BlogLink').on('click', function (e) {
            e.preventDefault();
         });
      }, 200);

      $('.dropdown-open').change(function() {
         $('.hamburgerMenu').toggleClass('hamburgerClose');        
      }); 
     
     // video player
      $('.productVideo video').attr('width', '303px');
      $('.productVideo video').attr('height', '303px');
   } else {
      $('#nav').append($('#menu'));
      $('#menu').css('display','flex');
      $('.mobileFooter').hide();
     
       $('a').each(function() {
        if($(this).attr('href') === '/a/wishlist') {
           if($(this).parent().attr('class') != 'wishlistSection') {
              $(this).remove();
           }
        }
     })
     
      // video player
      $('.productVideo video').attr('width', '525px');
      $('.productVideo video').attr('height', '525px');
   }
}
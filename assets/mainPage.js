$(function() {

  // Mobile only JS
  if($('.productImageCarousel').length > 0) {
    var slider = tns({
      "container": ".productImageCarousel",
      "controlsContainer": ".productImageControls", 
      "items": 1,
      "navContainer": ".productImageCarouselThumbnails",
      "navAsThumbnails": true,
      "autoplay": true,
      "speed": 400
    });
  }
});
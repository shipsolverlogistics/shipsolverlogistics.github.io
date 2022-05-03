$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + window.innerHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

var scroll =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

function loop() {
  $(".animate-on-scroll").each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass("animate-on-scroll-is-visible");
    } else {
      $(this).removeClass("animate-on-scroll-is-visible");
    }
  });

  scroll(loop);
}

loop();

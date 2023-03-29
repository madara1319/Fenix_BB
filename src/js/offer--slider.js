import Glide from "@glidejs/glide";


function resizeFunction() {
  var glideHero = new Glide(".glide", {
    type: "carousel",
    animationDuration: 2000,
    autoplay: 4500,
    focusAt: "1",
    startAt: 3,
    perView: 1,
  });
  var windowSize = window.innerWidth;
  if (windowSize > 768) {

    glideHero.destroy();


  } else {
    var glideHero = new Glide(".glide", {
      type: "carousel",
      animationDuration: 2000,
      autoplay: 4500,
      focusAt: "1",
      startAt: 3,
      perView: 1,
    });
    glideHero.mount();
  }
}
window.addEventListener("resize", resizeFunction);



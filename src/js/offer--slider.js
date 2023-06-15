import Glide from "@glidejs/glide";

var glideSlide=document.querySelector(".offer--slide");
var glideHero = null;

function resizeFunction() {
  var windowSize = window.innerWidth;

  if (windowSize < 768) {
    if (!glideHero) {
      glideHero = new Glide(".glide", {
        type: "carousel",
        animationDuration: 2000,
        autoplay: 4500,
        focusAt: "1",
        startAt: 3,
        perView: 1,
      });
      glideHero.mount();
      console.log('Glide mounted');
      glideSlide.classList.add("glide__slide");
    }
  } else {
    if (glideHero) {
      glideHero.destroy();
      glideHero = null;
      console.log('Glide destroyed');
      glideSlide.classList.remove("glide__slide");
    }
  }
}

window.addEventListener("resize", resizeFunction);

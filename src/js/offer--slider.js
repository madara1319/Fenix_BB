import Glide from "@glidejs/glide";

var glideSlide=document.querySelector(".offer--slide");
var glideHero = null;


function mountGlide() {
  glideHero = new Glide(".glide", {
    type: "carousel",
    animationDuration: 500,
    autoplay: null,
    focusAt: "center",
    startAt: 3,
    perView: 1,
  });
  glideHero.mount();
  console.log('Glide mounted');
  glideSlide.classList.add("glide__slide");
}

function destroyGlide() {
  glideHero.destroy();
  glideHero = null;
  console.log('Glide destroyed');
  glideSlide.classList.remove("glide__slide");
}

function checkWindowSize() {
  var windowSize = window.innerWidth;

  if (windowSize < 768) {
    if (!glideHero) {
      mountGlide();
    }
  } else {
    if (glideHero) {
      destroyGlide();
    }
  }
}

checkWindowSize(); 

window.addEventListener("resize", checkWindowSize);

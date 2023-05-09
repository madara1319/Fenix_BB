import Glide from "@glidejs/glide";


// function resizeFunction() {
//   var windowSize = window.innerWidth;
//   var localVariable=false;
//   var glideHero = new Glide(".glide", {
//     type: "carousel",
//     animationDuration: 2000,
//     autoplay: 4500,
//     focusAt: "1",
//     startAt: 3,
//     perView: 1,
//   });
//   console.log('Glide created');
//   var windowSize = window.innerWidth;
//   if (windowSize > 768) {

//     glideHero.disable();
//     console.log('glide disabled');
//     glideHero.destroy();
//     console.log('glide destroyed');


//   } else {


//     glideHero.mount();
//     localVariable.toggle.on('mount.after');
//     console.log('Glide mounted');
//     console.log(localVariable);
//   }
// }
// window.addEventListener("resize", resizeFunction);




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
    }
  } else {
    if (glideHero) {
      glideHero.destroy();
      glideHero = null;
      console.log('Glide destroyed');
    }
  }
}

window.addEventListener("resize", resizeFunction);

import Glide from '@glidejs/glide';


var glideHero = new Glide('.glide', {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4500,
    focusAt: '1',
    startAt: 3,
    perView: 1, 
  });


  glideHero.mount();

  var offerClass=document.querySelector(".offer--glide");

  function GlideRemover(){
if (window.innerWidth < 768) {
    offerClass.classList.remove(".glide");

  }
  else
  {
    offerClass.classList.add(".glide");
  };
};

window.onscroll = function () {
    GlideRemover();
  };
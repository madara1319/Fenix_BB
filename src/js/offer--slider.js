import glide from '@glidejs/glide';
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



var windowSize =window.innerWidth;

if(windowSize>768)
{
  glideHero.disable();
}
else
{
  glideHero.enable();
};

function resizeFunction()
{
  var windowSize =window.innerWidth;
  if(windowSize>768)
  {
    glideHero.disable();
  }
  else
  {
    glideHero.enable();

  }
};
window.addEventListener(`resize`,resizeFunction);
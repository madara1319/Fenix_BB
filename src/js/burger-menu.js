const navigationButton = document.querySelector(".button--js");
var closeX = getComputedStyle(document.documentElement).getPropertyValue('--background');
console.log(closeX); // Outputs the value of the --primary-color CSS variable

function burgerCloseChecker()
{
  if(navigation.classList.contains("navigation--open"))
  {
    navigationButton.classList.add("button--closed");
  }
  else
  {
    navigationButton.classList.remove("button--closed");
  };
}

const navigation = document.querySelector(".navigation--js");
navigationButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    navigation.classList.toggle("navigation--open");
    burgerCloseChecker();

    
  }
});

// $('.navigation__link').click(function(){
//   console.log('klikels');

// });
  //function(){navigation.classList.remove("navigation--open");
const naviLink=document.querySelector(".navigation");
naviLink.addEventListener('click',function()
{
  navigation.classList.toggle("navigation--open");
  burgerCloseChecker();
  //console.log("Klikles");
})




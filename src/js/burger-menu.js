const navigationButton = document.querySelector(".button--js");

const navigation = document.querySelector(".navigation--js");
navigationButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    navigation.classList.toggle("navigation--open");
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
  //console.log("Klikles");
})
  
const navigationButton = document.querySelector(".button--js");

const navigation = document.querySelector(".navigation--js");
navigationButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    navigation.classList.toggle("navigation--open");
  }
});


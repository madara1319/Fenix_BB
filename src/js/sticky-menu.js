window.onscroll = function () {
  stickyHeader();
};

var header = document.querySelector(".navigation--js");

var sticky = header.offsetTop;
console.log(header);


function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("navigation__menu--sticky");
  } else {
    header.classList.remove("navigation__menu--sticky");
  }
}

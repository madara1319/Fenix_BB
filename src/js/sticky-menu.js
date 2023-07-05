window.onscroll = function () {
  stickyHeader();
 // console.log(window.pageYOffset);
};

var header = document.querySelector(".head__bar--js");

var sticky = header.offsetTop;
//console.log(header);



// function stickyHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("menu--sticky");
//     header.classList.remove("head__bar");
//   } else {
//     header.classList.remove("menu--sticky");
//     header.classList.add("head__bar");
//   }
// }

function stickyHeader() {
  if (window.pageYOffset > 0) {
    header.classList.add("menu--sticky");
    header.classList.remove("head__bar");
  } else {
    header.classList.remove("menu--sticky");
    header.classList.add("head__bar");
  }
}

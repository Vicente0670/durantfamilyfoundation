var header;
function appLoad() {
  header = document.querySelector(".header");
  document.addEventListener("scroll", headerScroll);
}
//
let scrY = window.screen.height * (2/3);
function headerScroll() {
  let x = document.documentElement.scrollTop;
  let h = x / scrY;
  h = h * 100;
  h = h - 100;
  if (document.documentElement.scrollTop < scrY) {
    header.style.top = h + "%";
  }
  if (document.documentElement.scrollTop >= scrY) {
    header.style.top = 0;
  }
}
document.addEventListener("DOMContentLoaded", appLoad);
var background = [], icon;
function Loader() {
  background.push(document.getElementById("main"));
  background.push(document.getElementById("secondary"));
  background.push(document.getElementById("tertiary"));
  document.addEventListener("scroll", Background);
  Background();

  icon = document.getElementById("icon");
  icon.addEventListener("click", iconPresent);
}
function Background() {
  let x = document.documentElement.scrollTop / 15;
  background[0].style.backgroundPositionY = (x + 20) + "%";
  background[1].style.backgroundPositionY = (x + 2) + "%";
  background[2].style.backgroundPositionY = (x - 15) + "%";
}
function iconPresent() {
  document.querySelector("html").style.overflowY = "hidden";
  icon.style.transform = "scale(12)";
  icon.style.filter = "brightness(0)";
  icon.style.pointerEvents = "none";
  icon.style.zIndex = "256";
  iconReset();

  
}
function iconReset() {
  setTimeout(() => {
    icon.style.transform = "scale(1)";
    icon.style.filter = "brightness(1)";
    icon.style.pointerEvents = "all";
    icon.style.zIndex = "1";
  }, 500);
}
document.addEventListener("DOMContentLoaded", Loader);
// INFO FOR THE FOUNDATION:
// The mission of the Durant Family Charitable  Foundation
// is to enrich the lives of youth, their families and community through
// education, athletic, and social programs
// [13:35] Roderic  Irby (External)
// President - Wanda Durant
// [13:37] Roderic  Irby (External)
// Site Director - Michele Durant-Ridgley
// [13:37] Roderic  Irby (External)
// Program Director - Roderic A. Irby Jr.

// Prince George County - Where the founder played basketball
// Diploma - Symbolic of his love and passion for education and people who are educated.
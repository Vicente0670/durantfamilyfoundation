  var background = [], icon, interactiveEmblem, emblem, emblemButton = [], exit, info, infoParagraph, miniExit;
function Loader() {
  background.push(document.getElementById("main"));
  background.push(document.getElementById("secondary"));
  background.push(document.getElementById("tertiary"));
  document.addEventListener("scroll", Background);
  Background();

  icon = document.getElementById("icon");
  icon.addEventListener("click", iconPresent);
  interactiveEmblem = document.getElementById("interactiveEmblem");
  emblem = document.getElementById("e-base");
  emblemButton.push(document.getElementById("e-flower"));
  emblemButton.push(document.getElementById("e-county"));
  emblemButton.push(document.getElementById("e-person"));
  emblemButton.push(document.getElementById("e-grad"));
  for (i = 0; i < emblemButton.length; i++) {
    emblemButton[i].addEventListener("click", infoTextShow);
    emblemButton[i].children[0].setAttribute("aria-label", ("text-" + [i]))
  }

  exit = document.getElementById("exit");
  exit.addEventListener("click", iconReset);

  info = document.getElementById("info");
  infoParagraph = document.querySelectorAll("#info p");
  miniExit = document.querySelector("#info div");
  miniExit.addEventListener("click", infoExit);

}
function Background() {
  let x = document.documentElement.scrollTop / 15;
  background[0].style.backgroundPositionY = (x + 20) + "%";
  background[1].style.backgroundPositionY = (x + 2) + "%";
  background[2].style.backgroundPositionY = (x - 35) + "%";
}
function iconPresent() {
  document.querySelector("html").style.overflowY = "hidden";
  icon.style.transform = "scale(12)";
  icon.style.filter = "brightness(0)";
  icon.style.pointerEvents = "none";
  icon.style.zIndex = 256;
  iconSet();
}
function iconSet() {
  setTimeout(() => {
    icon.style.transform = "scale(1)";
    icon.style.filter = "brightness(1)";
    icon.style.zIndex = "1";
    interactiveEmblem.style.pointerEvents = "all";
    interactiveEmblem.style.opacity = 1;
    interactiveEmblem.style.zIndex = 256;
    document.querySelectorAll("#interactiveEmblem *").forEach((e) => {
      e.style.opacity = 1;
    });
    exit.style.pointerEvents = "all";
    info.style.opacity = 0;
    info.style.pointerEvents = "none";
    infoParagraph.forEach((e) => {
      e.style.opacity = 0;
    });
    miniExit.style.pointerEvents = "none";
  }, 500);
}
function iconReset() {
  document.querySelector("html").style.overflowY = "auto";
  interactiveEmblem.style.transition = "opacity .25s";
  interactiveEmblem.style.pointerEvents = "none";
  interactiveEmblem.style.opacity = 0;
  document.querySelectorAll("#interactiveEmblem *").forEach((e) => {
    e.style.opacity = 0;
  });
  exit.style.pointerEvents = "none";
  setTimeout(() => {
    icon.style.pointerEvents = "all";
    interactiveEmblem.style.zIndex = -1;
    interactiveEmblem.style.transition = "none";
  }, 250);
}
function infoTextShow(e) {
  let x = e.target.getAttribute("aria-label");
  let filter = "brightness(1.5)";
  let scale = 2;
  let zIndex = 257;

  info.style.opacity = 1;
  info.style.pointerEvents = "all";
  infoParagraph[0].style.opacity = 1;
  miniExit.style.pointerEvents = "all";
  emblem.style.filter = "blur(1rem)";
  emblemButton.forEach((e) => {
    e.style.filter = "blur(1rem)";
  });
  if (x === "text-0") {
    infoParagraph[1].style.opacity = 1;
    emblemButton[0].style.filter = filter;
    emblemButton[0].style.scale = scale;
    emblemButton[0].style.zIndex = zIndex;
    emblemButton[0].style.translate = "12.5% 50%";
  }
  else if (x === "text-1") {
    infoParagraph[2].style.opacity = 1;
    emblemButton[1].style.filter = filter;
    emblemButton[1].style.scale = scale;
    emblemButton[1].style.zIndex = zIndex;
    emblemButton[1].style.translate = "-12.5% 50%";
  }
  else if (x === "text-2") {
    infoParagraph[3].style.opacity = 1;
    emblemButton[2].style.filter = filter;
    emblemButton[2].style.scale = scale;
    emblemButton[2].style.zIndex = zIndex;
    emblemButton[2].style.translate = "12.5% -50%";
  }
  else if (x === "text-3") {
    infoParagraph[4].style.opacity = 1;
    emblemButton[3].style.filter = filter;
    emblemButton[3].style.scale = scale;
    emblemButton[3].style.zIndex = zIndex;
    emblemButton[3].style.translate = "-12.5% -50%";
  }
  else {
    return;
  }
}
function infoExit() {
  info.style.opacity = 0;
  info.style.pointerEvents = "none";
  infoParagraph.forEach((e) => {
    e.style.opacity = 0;
  });
  miniExit.style.pointerEvents = "none";
  emblem.style.filter = "none";
  emblemButton.forEach((e) => {
    e.style.filter = "none";
    e.style.scale = 1;
    e.style.translate = "none";
    e.style.zIndex = 256;
  });
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
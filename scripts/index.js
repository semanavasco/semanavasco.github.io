const mouseLight = document.getElementById("mouse-light");
var timeout;

document.onmousemove = (event) => {
  mouseLight.style.opacity = 1;

  mouseLight.style.top = `${event.clientY - mouseLight.clientHeight / 2}px`;
  mouseLight.style.left = `${event.clientX - mouseLight.clientWidth / 2}px`;

  if (!timeout) window.clearTimeout(timeout);
  timeout = window.setTimeout(() => {
    mouseLight.style.opacity = 0;
  }, 2500);
};

function modifierNavigation(chemin) {
  const navigation = document.getElementById("nav-menu");
  for (const e of navigation.children) e.classList.toggle("active");

  const control = document.getElementById("nav-control");
  const controlSpan = control.children[0];

  if (controlSpan.textContent.includes("menu"))
    controlSpan.textContent = "close";
  else controlSpan.textContent = "menu";
}

// Scroll to Top
const SCROLL_DEPTH_BEFORE_BUTTON = 750;

window.onscroll = () => {
  const scrollTTBtn = document.getElementById("scroll-to-top");

  if (
    document.body.scrollTop > SCROLL_DEPTH_BEFORE_BUTTON ||
    document.documentElement.scrollTop > SCROLL_DEPTH_BEFORE_BUTTON
  )
    scrollTTBtn.style.display = "flex";
  else scrollTTBtn.style.display = "none";
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

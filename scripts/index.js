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

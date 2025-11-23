document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const icon = document.getElementById("menu-icon");

  if (!menuToggle || !nav || !icon) return;

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("hidden");

    const abierto = !nav.classList.contains("hidden");

    if (abierto) {
      icon.src = "images/menu.png"; 
      icon.alt = "Cerrar menú";
      menuToggle.setAttribute("aria-expanded", "true");
    } else {
      icon.src = "images/menu.png";
      icon.alt = "Abrir menú";
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});




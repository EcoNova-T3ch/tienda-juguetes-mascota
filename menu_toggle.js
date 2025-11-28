// Selecciona el botón de hamburguesa
const menuToggle = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menuHorizontal = document.querySelector(".Menu-Horizontal");

// Al hacer clic en el botón de hamburguesa
menuToggle.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menuHorizontal.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

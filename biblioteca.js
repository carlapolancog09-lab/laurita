// --- Biblioteca Web General --- //
// Funciones reutilizables para efectos y animaciones

// Efecto de aparición al hacer scroll
function activarAnimaciones() {
  const secciones = document.querySelectorAll('.section-animated');
  secciones.forEach(sec => {
    const posicion = sec.getBoundingClientRect().top;
    const altura = window.innerHeight * 0.8;
    if (posicion < altura) {
      sec.classList.add('visible');
    }
  });
}

// Ejecutar al hacer scroll
window.addEventListener('scroll', activarAnimaciones);
window.addEventListener('load', activarAnimaciones);

// Mensaje interactivo (ejemplo de función reutilizable)
function mostrarMensaje(texto) {
  alert(`🍔 ${texto}`);
}

// Botones con clase .btn-alert mostrarán un mensaje
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-alert')) {
    mostrarMensaje('¡Gracias por visitar McDonald’s!');
  }
});


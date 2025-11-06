// --- app.js --- //
// Aquí va el código personalizado de TU página

// 1️⃣ Mensaje de bienvenida al cargar la página
window.addEventListener('load', () => {
  console.log("✅ Página cargada correctamente");
});

// 2️⃣ Validación básica del formulario (si existe en la página)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Gracias ${name} ❤️. Hemos recibido tu comentario.\nTe contactaremos en: ${email}`);
    form.reset(); // limpia el formulario
  });
}

// 3️⃣ Botón que muestra un mensaje (usa la función de biblioteca)
const specialBtn = document.querySelector(".btn-alert");
if (specialBtn) {
  specialBtn.addEventListener("click", () => {
    mostrarMensaje("Te esperamos pronto 🍟");
  });
}

// 4️⃣ Pequeña animación al pasar el mouse sobre las imágenes
const imgs = document.querySelectorAll(".producto img, .card img");
imgs.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// 5️⃣ Navegación suave al hacer clic en enlaces internos
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

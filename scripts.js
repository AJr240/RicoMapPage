/* ================================
   ⏳ CUENTA REGRESIVA
================================ */
const targetDate = new Date("2025-12-31T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
  }

  // Cuando llegue la fecha
  if (distance < 0 && document.querySelector(".countdown-section")) {
    document.querySelector(".countdown-section").innerHTML =
      "<h2>🎉 ¡RicoMap ya está disponible! 🎉</h2>";
  }
}
setInterval(updateCountdown, 1000);


/* ================================
   🧾 MODALES DE REGISTRO
================================ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "flex";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
  if (id === "modal") resetForms();
}

function showForm(type) {
  const cliente = document.getElementById("formCliente");
  const restaurante = document.getElementById("formRestaurante");

  if (!cliente || !restaurante) return;

  cliente.style.display = "none";
  restaurante.style.display = "none";

  if (type === "cliente") cliente.style.display = "block";
  if (type === "restaurante") restaurante.style.display = "block";
}

function resetForms() {
  const cliente = document.getElementById("formCliente");
  const restaurante = document.getElementById("formRestaurante");
  if (cliente) cliente.style.display = "none";
  if (restaurante) restaurante.style.display = "none";
}

// Cierra modal al hacer clic fuera
window.onclick = (e) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (e.target === modal) modal.style.display = "none";
  });
};


/* ================================
   🧮 CONTADOR VISUAL ANIMADO
================================ */
function animateCounter(id, target) {
  const element = document.getElementById(id);
  if (!element) return;

  let count = 0;
  const increment = Math.ceil(target / 100);

  const update = () => {
    if (count < target) {
      count += increment;
      element.textContent = count;
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  };

  update();
}


/* ================================
   🔍 ZOOM INTERACTIVO EN IMÁGENES
================================ */
function setupZoom() {
  const demoImages = document.querySelectorAll(".app-gallery img");

  demoImages.forEach((img) => {
    img.addEventListener("click", () => {
      if (img.classList.contains("zoomed")) {
        img.classList.remove("zoomed");
      } else {
        demoImages.forEach((i) => i.classList.remove("zoomed"));
        img.classList.add("zoomed");
      }
    });
  });

  // Cerrar zoom si clic fuera de imagen
  window.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") {
      demoImages.forEach((img) => img.classList.remove("zoomed"));
    }
  });
}


/* ================================
   🌀 SCROLL SUAVE ENTRE ENLACES
================================ */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}


/* ================================
   🚀 INICIALIZACIÓN GLOBAL
================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Contadores simulados
  animateCounter("clientes-count", 256);
  animateCounter("restaurantes-count", 134);

  // Activar zoom y scroll suave
  setupZoom();
  setupSmoothScroll();

  // Iniciar cuenta regresiva
  updateCountdown();
});

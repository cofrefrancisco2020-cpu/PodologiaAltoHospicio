const WHATSAPP_NUMBER = "NUMERO_WHATSAPP_AQUI";

const buildWhatsappUrl = (message) => {
  const cleanedNumber = WHATSAPP_NUMBER.replace(/\D/g, "") || WHATSAPP_NUMBER;
  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
};

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const message = link.dataset.message || "Hola, vi su página web y me gustaría solicitar una hora.";
  link.href = buildWhatsappUrl(message);
  link.target = "_blank";
  link.rel = "noopener";
});

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(contactForm);
    const name = String(form.get("nombre") || "").trim();
    const phone = String(form.get("telefono") || "").trim();
    const service = String(form.get("servicio") || "").trim();
    const message = String(form.get("mensaje") || "").trim();

    const whatsappMessage = [
      "Hola, vi su página web y me gustaría solicitar una hora.",
      "",
      `Nombre: ${name}`,
      `Telefono: ${phone}`,
      `Motivo: ${service}`,
      message ? `Mensaje: ${message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    if (formNote) {
      formNote.textContent = "Abriendo WhatsApp con tu consulta preparada...";
    }

    window.open(buildWhatsappUrl(whatsappMessage), "_blank", "noopener");
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

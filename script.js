// Efeito simples de animação ao rolar a página
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".produto, .cliente");
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Inicializar elementos com estado inicial para animação
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".produto, .cliente");
  elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
  
  // Trigger inicial para elementos já visíveis
  window.dispatchEvent(new Event('scroll'));
});

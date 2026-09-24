document.addEventListener("DOMContentLoaded", () => {
  // Menu
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      menuToggle.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Aparecer ao rolar
  const elementos = document.querySelectorAll(
    ".card, .showcase-card, .banner-vermelho"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            const el = entrada.target;
            el.classList.add("visivel");
            observer.unobserve(el);

            // Remove o atraso depois da entrada, para o hover não demorar
            setTimeout(() => {
              el.style.transitionDelay = "0s";
            }, 1200);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach((el, i) => {
      el.classList.add("reveal");
      // Pequeno atraso em sequência para os cards
      if (el.classList.contains("card")) {
        el.style.transitionDelay = `${(i % 3) * 0.1}s`;
      }
      observer.observe(el);
    });
  }
});
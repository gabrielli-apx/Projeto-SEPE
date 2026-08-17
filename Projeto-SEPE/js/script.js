
      const menuToggle = document.getElementById("menuToggle");
      const navList = document.getElementById("navList");

      menuToggle.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("open");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
      });

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menubar");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".header");
    let lastScrollTop = 0;
  
    if (menu && navbar) {
      // Event click pada menubar
      menu.addEventListener("click", () => {
        console.log("Menu clicked!");
        // Toggle class active pada navbar
        navbar.classList.toggle("active");
  
        // Toggle icon
        if (navbar.classList.contains("active")) {
          menu.classList.remove("fa-bars");
          menu.classList.add("fa-xmark");
        } else {
          menu.classList.remove("fa-xmark");
          menu.classList.add("fa-bars");
        }
      });
  
      // Tutup menu ketika mengklik di luar navbar
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !navbar.contains(e.target)) {
          navbar.classList.remove("active");
          menu.classList.remove("fa-xmark");
          menu.classList.add("fa-bars");
        }
      });
  
      // Smooth scroll untuk navigasi
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
  
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
  
            // Tutup mobile menu jika terbuka
            menu.classList.remove("fa-xmark");
            menu.classList.add("fa-bars");
            navbar.classList.remove("active");
          }
        });
      });
  
      // Menutup menu saat scroll
      window.addEventListener("scroll", () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
  
        // Tutup menu saat scroll
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
        navbar.classList.remove("active");
  
        // Sembunyikan header saat scroll down, tampilkan saat scroll up
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transform = "translateY(0)";
        }
  
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Update posisi scroll terakhir
      });
  
      // Inisialisasi AOS
      if (typeof AOS !== "undefined") {
        AOS.init({
          duration: 800,
          offset: 150,
          once: false,
        });
      }
    } else {
      console.error("Menu or navbar element not found!");
    }
  
    // Debug logs
    console.log("Menubar element:", menu);
    console.log("Navbar element:", navbar);
  });
  
  
  
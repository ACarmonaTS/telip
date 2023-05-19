// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Navbar
    const navbarToggler = document.querySelector(".navbar-toggler");
    const offcanvasNavbar = document.querySelector("#offcanvasNavbar");
  
    navbarToggler.addEventListener("click", function () {
      offcanvasNavbar.classList.toggle("show");
    });
  
    // Carrousel
    const carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleCaptions"), {
      interval: false
    });
  
    // Noticias
    const noticiasCards = document.querySelectorAll(".noticias .card");
  
    noticiasCards.forEach(function (card) {
      card.addEventListener("click", function () {
        // Handle card click event
      });
    });
  });
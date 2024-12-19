// Preloader Logic
window.addEventListener('load', function () {
  // Ensure the preloader is displayed while the website loads
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  if (preloader && mainContent) {
    // Hide the preloader and display the main content after all resources are loaded
    preloader.style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    console.error("Preloader or main-content element is missing in the HTML.");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const dropdown = document.getElementById('dropdown');

  if (menuBtn && dropdown) {
    menuBtn.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
    });
  } else {
    console.error("Menu button or dropdown element is missing in the HTML.");
  }

  // Navbar Scroll Behavior
  const navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.style.paddingTop = '20px';
        navbar.style.paddingBottom = '20px';
        navbar.classList.add('shadow-lg', 'h-20');
      } else {
        navbar.style.paddingTop = '35px';
        navbar.style.paddingBottom = '35px';
        navbar.classList.remove('shadow-lg');
      }
    });
  } else {
    console.error("Navbar element is missing in the HTML.");
  }
});

window.addEventListener('load', function () {
    setTimeout(function () {
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
      const mainContent = document.getElementById('main-content');
      mainContent.style.display = 'block';
    }, 3000);
});

const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');

menuBtn.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});

const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    navbar.style.paddingTop = '20px';
    navbar.style.paddingBottom = '20px';
    navbar.classList.add('shadow-lg h-20');
    } else {
    navbar.style.paddingTop = '35px';
    navbar.style.paddingBottom = '35px';
    navbar.classList.remove('shadow-lg');
    }
});


function toggleDescription(element) {
  // Get the description inside the clicked key point
  const description = element.querySelector(".description");

  // Toggle the visibility of the description
  description.classList.toggle("hidden");

  // Add or remove the bold class on the key point text
  const keyText = element.querySelector(".key-text");
  keyText.classList.toggle("font-bold");
}

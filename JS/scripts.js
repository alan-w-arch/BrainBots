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



// Key Point Description Toggle
function toggleDescription(element) {
  // Get the description inside the clicked key point
  const description = element.querySelector(".description");

  if (description) {
    // Toggle the visibility of the description
    description.classList.toggle("hidden");

    // Add or remove the bold class on the key point text
    const keyText = element.querySelector(".key-text");
    if (keyText) {
      keyText.classList.toggle("font-bold");
    }
  } else {
    console.error("Description element is missing in the key point.");
  }
}

const video = document.getElementById('galleryVideo');
const gallerySection = document.getElementById('gallery');

if (video && gallerySection) {
  const handleScroll = () => {
    if (window.scrollY > gallerySection.offsetTop - 200) {
      video.removeAttribute('muted');
      
    } else {
      video.setAttribute('muted', 'true');
      video.setAttribute('autoplay', 'true');// Set muted attribute correctly
    }
  };

  window.addEventListener('scroll', handleScroll);
}




  // Intersection Observer to detect when the section is in view
 /* const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play(); // Play video when in view
        } else {
          video.pause(); // Pause video when out of view
        }
      });
    },
    { threshold: 0.1 } // Adjust threshold for how much of the section is visible before triggering
  );

  // Observe the gallery section
  observer.observe(gallerySection);*/
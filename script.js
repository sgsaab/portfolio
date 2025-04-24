// Function to highlight the current section we're in for the case study navigation
function setActiveNavItem() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".case-study-nav a");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 100 &&
        window.scrollY < sectionTop + sectionHeight - 100
      ) {
        currentSection = "#" + section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentSection) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
}

window.addEventListener("load", setActiveNavItem);
window.addEventListener("scroll", setActiveNavItem);

// Function to toggle dark and light modes
document.addEventListener('DOMContentLoaded', function() {

    const toggle = document.querySelector('.toggle-theme');
    const sunIcon = document.querySelector('.sun-icon');
  
    // Check for saved user preference, if any
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      sunIcon.src = '/assets/small-moon.svg';
      sunIcon.alt = 'Moon';
    }
    
    // Toggle dark mode when clicking the sun/moon
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle dark mode class
      document.body.classList.toggle('dark-mode');
      
      // Update icon and localStorage
      if (document.body.classList.contains('dark-mode')) {
        sunIcon.src = '/assets/small-moon.svg';
        sunIcon.alt = 'Moon';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        sunIcon.src = '/assets/small-sun.svg';
        sunIcon.alt = 'Sun';
        localStorage.setItem('darkMode', 'disabled');
      }
    });
});

// Function to handle header visibility on scroll
document.addEventListener('DOMContentLoaded', function() {
    console.log("hello")
    const nav = document.querySelector('nav');
    let lastScrollPosition = 0;
    let ticking = false;
  
    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      
      // Determine scroll direction
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        // Scrolling down & not at the top
        nav.classList.add('navbar-hidden');
      } else {
        // Scrolling up or at the top
        nav.classList.remove('navbar-hidden');
      }
      
      lastScrollPosition = currentScrollPosition;
      ticking = false;
    }
  
    // Throttle scroll events for better performance
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
});  
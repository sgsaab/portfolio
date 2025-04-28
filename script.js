// Function to highlight the current section we're in for the case study navigation
function setActiveNavItem() {
  console.log("hello from setActiveNavItem");
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
  console.log("hello from toggle dark mode");


    const toggle = document.querySelectorAll('.toggle-theme');
    const sunIcon = document.querySelector('.sun-icon');
    const bigSun = document.querySelector('.big-sun');
    const favicon = document.getElementById('favicon');

    // Check for saved user preference, if any
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      if (sunIcon) {
        sunIcon.src = '/assets/small-moon.svg';
        sunIcon.alt = 'Moon';
      }
      if (bigSun) {
        bigSun.src = '/assets/big-moon.svg';
        bigSun.alt = 'Moon';
      }
      favicon.href = '/assets/night-logo.svg';
    }
    
    // Toggle dark mode when clicking the sun/moon
    function toggleFunc(e) {
      e.preventDefault();
      
      // Toggle dark mode class
      document.body.classList.toggle('dark-mode');
      console.log('Dark mode toggled:', document.body.classList.contains('dark-mode'));
      
      // Update icon and localStorage
      if (document.body.classList.contains('dark-mode')) {
        if (sunIcon) {
          sunIcon.src = '/assets/small-moon.svg';
          sunIcon.alt = 'Moon';
        }
        if (bigSun) {
          bigSun.src = '/assets/big-moon.svg';
          bigSun.alt = 'Moon';
        }
        favicon.href = '/assets/night-logo.svg';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        if (sunIcon) {
          sunIcon.src = '/assets/small-sun.svg';
          sunIcon.alt = 'Sun';
        }
        if (bigSun) {
          bigSun.src = '/assets/big-sun.svg';
          bigSun.alt = 'Sun';
        }
        favicon.href = '/assets/day-logo.svg';
        localStorage.setItem('darkMode', 'disabled');
      }
    }

    toggle.forEach(toggle => {
      toggle.addEventListener('click', toggleFunc);
    });
});

// Function to handle header visibility on scroll
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  let lastScrollPosition = 0;
  let ticking = false;

  function handleScroll() {
    const currentScrollPosition = window.pageYOffset;
  
    if (currentScrollPosition <= 0) {
      // Always show navbar at top
      nav.classList.remove('navbar-hidden');
    } else if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
      // Scrolling down past 50px → hide
      nav.classList.add('navbar-hidden');
    } else {
      // Scrolling up → show
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

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".cloud")) {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      document.querySelector(".cloud-1").style.transform = `translateX(${scrollPosition * -0.05}px)`;
      document.querySelector(".cloud-2").style.transform = `translateX(${scrollPosition * 0.075}px)`;
      document.querySelector(".cloud-3").style.transform = `translateX(${scrollPosition * -0.1}px)`;
      document.querySelector(".cloud-4").style.transform = `translateX(${scrollPosition * 0.025}px)`;
    });
  }
});

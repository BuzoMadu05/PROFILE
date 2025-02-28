// responsive.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
    
    // Toggle the 'active' class on the nav ul when the menu icon is clicked
    menuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });
  
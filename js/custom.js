// Initialize matchHeight on all elements with the class 'box'
$(document).ready(function() {
    $('.service-block-one .card__content p').matchHeight();
    $('.service-block-one .icon-box').matchHeight();
});


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Toggle the menu when hamburger is clicked
  hamburger.addEventListener('click', function() {
    menu.classList.toggle('show'); // Show or hide the menu
  });

  // Close the menu after clicking a link and revert to hamburger menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('show'); // Close the menu
    });
  });
});

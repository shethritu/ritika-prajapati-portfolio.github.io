// Initialize matchHeight on all elements with the class 'box'
$(document).ready(function() {
    $('.service-block-one .card__content p').matchHeight();
    $('.service-block-one .icon-box').matchHeight();
});


		// Define a media query
const mediaQuery = window.matchMedia('(max-width: 767px)');

// Function to handle changes in media query status
function handleScreenChange(e) {
  if (e.matches) {
    // If the screen is less than or equal to 768px
    document.querySelectorAll('#myLinks .nav-link').forEach(item => {
		item.addEventListener('click', () => {
		document.getElementById('myLinks').style.display = 'none'; // Hides the menu
		});
	});
  }
}

// Initial check
handleScreenChange(mediaQuery);

// Add a listener for when the media query status changes
mediaQuery.addListener(handleScreenChange);

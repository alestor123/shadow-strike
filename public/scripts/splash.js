window.onload = function () {
    // Get the splash screen and pagef elements
    const splashScreen = document.querySelector('.splash-screen');
    const pagefContent = document.getElementById('pagef-content');
    const navbar = document.getElementById('navbar');

    // Set a delay for hiding the splash screen and showing the navbar and main content
    setTimeout(() => {
        splashScreen.style.display = 'none';  // Hide the splash screen
        pagefContent.style.display = 'block';  // Show the main content
        navbar.classList.remove('hidden');  // Show the navbar
    }, 4000);  // Adjust the time (in ms) to match your splash screen duration
};

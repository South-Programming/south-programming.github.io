console.log("JavaScript is working.");

// Select elements with class 'parallax-header' in both index.html and recap.html
const parallaxHeaders = document.querySelectorAll('.parallax-header');
window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;

    // Loop through each parallax header element
    parallaxHeaders.forEach(parallaxHeader => {
        // Adjust the scroll speed of the header (0.5x speed in this case)
        parallaxHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

console.log("Parallax Loaded.")
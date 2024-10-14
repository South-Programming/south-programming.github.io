console.log("JavaScript is working.");

window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const parallaxHeader = document.querySelector('.parallax-header');
    
    // Adjust the scroll speed of the header (0.5x speed in this case)
    parallaxHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
    console.log("Parallax Loaded.")
});
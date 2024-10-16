// JavaScript for Toggle Menu
function openmenu() {
    document.getElementById("sidemenu").classList.add("open");
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("open");
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

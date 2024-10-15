document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    menuBtn.addEventListener("click", () => {
        navbar.querySelector("ul").classList.toggle("active");
    });
});

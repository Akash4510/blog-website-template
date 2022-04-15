let header = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

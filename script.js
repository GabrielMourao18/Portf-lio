document.addEventListener("DOMContentLoaded", function () {

    // Animação de entrada simples
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("active");
        }, index * 200);
    });

    // Sidebar mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.querySelector(".close-sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

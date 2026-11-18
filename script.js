
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navItems = document.querySelectorAll(".nav-links a");

    // Close dropdown after selecting a navigation item
    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menuToggle.checked = false;
        });
    });

});


document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");

    const navLinks = document.querySelectorAll(
        '.nav-links a, .logo, .hero-button, .about-button, .explore-next-link'
    );

    const sections = document.querySelectorAll("main > section");

    function showSection(sectionId, updateHistory = true) {

        const selectedSection = document.getElementById(sectionId);

        if (!selectedSection || !selectedSection.matches("main > section")) {
            return;
        }

        // Hide every section first
        sections.forEach(section => {
            section.classList.remove("active-section");
            section.style.display = "none";
        });

        // Display only the selected section
        selectedSection.classList.add("active-section");
        selectedSection.style.display = "block";

        // Close mobile dropdown
        if (menuToggle) {
            menuToggle.checked = false;
        }

        // Update URL
        if (updateHistory) {
            history.pushState(null, "", "#" + sectionId);
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Navigation clicks
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            const sectionId = href.substring(1);

            const targetSection = document.getElementById(sectionId);

            if (targetSection && targetSection.matches("main > section")) {
                event.preventDefault();
                showSection(sectionId);
            }

        });
    });

    // Browser back and forward
    window.addEventListener("popstate", function () {
        const sectionId = window.location.hash.substring(1) || "home";
        showSection(sectionId, false);
    });

    // Initial section
    const initialSection = window.location.hash.substring(1) || "home";
    showSection(initialSection, false);

});

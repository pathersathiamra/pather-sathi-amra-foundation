
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(
        '.nav-links a, .logo, .hero-button, .about-button'
    );

    const sections = document.querySelectorAll("main > section");

    function showSection(sectionId, updateHistory = true) {

        const selectedSection = document.getElementById(sectionId);

        // Check that the requested section exists inside main
        if (!selectedSection || !selectedSection.matches("main > section")) {
            return;
        }

        // Hide all sections and show the selected section
        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        selectedSection.classList.add("active-section");

        // Close the mobile dropdown
        if (menuToggle) {
            menuToggle.checked = false;
        }

        // Update the browser URL
        if (updateHistory) {
            history.pushState(null, "", "#" + sectionId);
        }

        // Start the selected section from the top
        window.scrollTo(0, 0);
    }

    // Handle navigation clicks
    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            const sectionId = href.substring(1);

            if (document.getElementById(sectionId)?.matches("main > section")) {
                event.preventDefault();
                showSection(sectionId);
            }

        });

    });

    // Handle browser back and forward buttons
    window.addEventListener("popstate", function () {

        const sectionId = window.location.hash.substring(1) || "home";
        showSection(sectionId, false);

    });

    // Open the correct section if the URL already has a section hash
    const initialSection = window.location.hash.substring(1) || "home";
    showSection(initialSection, false);

});

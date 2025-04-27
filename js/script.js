document.addEventListener('DOMContentLoaded', function() {

    // --- Responsive Navigation --- 
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle burger icon (optional)
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Course Section Scroll Animation --- 
    const courseSections = document.querySelectorAll('.course-section');
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after animation
                // observer.unobserve(entry.target);
            }
            // Optional: Remove 'visible' class when scrolling out of view
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, observerOptions);

    if (courseSections.length > 0) {
        courseSections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    if (timelineItems.length > 0) {
        timelineItems.forEach(item => {
            sectionObserver.observe(item); // Use the same observer
        });
    }

    // --- Flip Card Quiz Functionality --- 
    const flipcards = document.querySelectorAll('.flipcard');

    if (flipcards.length > 0) {
        flipcards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    }

    // --- Smooth Scrolling for Nav Links (Optional) ---
    // Add this if you want smooth scrolling to sections from nav links (if you add IDs to sections)
    // document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({ behavior: 'smooth' });
    //             // Close mobile nav if open
    //             if (navLinks.classList.contains('active')) {
    //                 navLinks.classList.remove('active');
    //                 menuToggle.querySelector('i').classList.remove('fa-times');
    //                 menuToggle.querySelector('i').classList.add('fa-bars');
    //             }
    //         }
    //     });
    // });

});

// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Fresh Graduate", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Active nav link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    // Back to Top Button
    let backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Collapse navbar on link click
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        let navbar = document.querySelector('.navbar-collapse');
        let toggler = document.querySelector('.navbar-toggler');
        if (navbar.classList.contains('show')) {
            toggler.click();
        }
    });
});

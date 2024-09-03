var typed = new Typed(".text", {
    strings: ["Fresh Graduate", "Web Developer"],
    typeSpeed: 100, // buat kecepatan pengetikan karakter
    backSpeed:100,  //buat atur speed karakternya ilang
    backDelay: 1000, // delay antar karakter
    loop: true
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { //function buat scroll dll
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('nav ul li a[href*="' + id +'"]').classList.add('active');
        }
    });
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //debugger;
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        // console.log(index);
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
        //console.log(index / 7);
    });

}



navSlide();
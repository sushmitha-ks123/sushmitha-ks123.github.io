function myFunction() {
    var x = document.getElementById("nav-ul");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// const menu = document.querySelector('.hamburger');
// const menuLinks = document.querySelector('.nav-li');

// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menu.classList.toggle('active');
// })

// burger = document.querySelector('.hamburger');
// navbar = document.querySelector('.nav-logo-container');
// navList = document.querySelector('.nav-ul');
// // rightNav = document.querySelector('.rightNav');

// burger.addEventListener('click', () => {
//     // rightNav.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
//     navbar.classList.toggle('h-nav-resp');
// })

// $('ul.nav-ul li').click(function(e){
//     e.preventDefault();
//     if($(this).siblings('li'))
// })



// const navSlide = () => {
//     const burger = document.querySelector('.hamburger');
//     const nav = document.querySelector('.nav-ul');
//     const navLinks = document.querySelectorAll('.nav-ul li');

//     burger.addEventListener('click', () => {
//         //debugger;
//         nav.classList.toggle('nav-active');
//     });
// }
// navSlide();

// var circle = document.querySelector('.material-btn');
// var link = document.querySelector('.nav-ul').querySelectorAll('li');
// var ham = document.querySelector('.hamburger');
// var main = document.querySelector('main');
// var win = window;

// function openMenu(event) {

//     circle.classList.toggle('active');
//     ham.classList.toggle('material-close');
//     //   main.classList.toggle('active');
//     for (var i = 0; i < link.length; i++) {
//         link[i].classList.toggle('active');
//     }
//     event.preventDefault();
//     event.stopImmediatePropagation();
// }
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});

//
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

//typed js
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
//sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
//remove toggle icon
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

//keyfram animation
let textElement = document.querySelector('.home-content .text-animate h3');

textElement.addEventListener('animationend', function () {
  textElement.classList.add('fade-out');
});

// toggle menu

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});




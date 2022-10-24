const slides = document.querySelectorAll(".hero>li")
const dots = document.querySelectorAll(".next-main-slider-d>span");


let activeSlide = 0;

const reset = () => {
    dots.forEach(dot => dot.removeAttribute('class'));
    dots[activeSlide].className = 'activ';
    slides.forEach(slide => slide.style.display = 'none');
    slides[activeSlide].style.display = 'block';
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    activeSlide = index;
     reset();   
 
    });
});

const checkpoint = 600;
let nav_bg = 'transparent';
let opacity = 1; 

window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
 if(currentScroll <= checkpoint) {
    nav_bg = 'transparent';
    opacity = 1 - currentScroll/checkpoint;
 } else {
    nav_bg = '#000';
    opacity = 0;
 }
 document.querySelector(".header-nav").style.background = nav_bg;  
 slides.forEach(slide => slide.getElementsByTagName('img')[0].style.opacity = opacity);
});


const menu = document.querySelector('.mobile-button');
const submenu = document.querySelector('.second-menu-mobile');

let is_open = 0;
menu.addEventListener("click", () => {
    if(!is_open){
        submenu.style.display = 'block';
        is_open = 1;
    } else {
        submenu.style.display = 'none';
        is_open = 0;
    }
    
})

"use strict"

const carouselSlide = document.querySelector('.carousel-slide');
const carouselTestimonial = document.querySelectorAll('.carousel-slide .testimonial-slide');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselTestimonial[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

// Button Listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselTestimonial.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselTestimonial[counter].id ==='lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselTestimonial.length - 2;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
    if (carouselTestimonial[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselTestimonial.length - counter;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
});

export default carouselSlide;
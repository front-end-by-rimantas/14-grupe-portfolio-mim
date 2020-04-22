"use strict"
function renderTestimonials(testimonialsList) {
    let testHTML = '';
    let carouselHTML = '';

    if ( !Array.isArray(testimonialsList) ) {
        return console.log('ERROR: data is not arrey..');  
    }
    if ( testimonialsList.length === 0 ) {
        return console.log('ERROR: arrey cannot be empty');  
    }

    for (let i = 0; i < testimonialsList.length; i++) {
        const testimonial = testimonialsList[i];
        carouselHTML += `<div class="testimonial-slide" id="${testimonial.id}">
                            <img src="./img/testimonial/${testimonial.photo}" alt="User photo">
                            <div class="testimonial-content">
                                <h4 class="testimonial-h4">${testimonial.name}</h4>
                                <h6 class="testimonial-duties">${testimonial.dutie}</h6>
                                <p>${testimonial.description}</p>
                            </div>
                        </div>`;
    }

    testHTML = `<div class="row">
                    <div class="carousel-container">
                        <div class="carousel-slide" id="carousel">
                            ${carouselHTML}
                        </div>
                        <i class="fa fa-angle-left" aria-hidden="true" id="prevBtn"></i>
                        <i class="fa fa-angle-right" aria-hidden="true" id="nextBtn"></i>    
                    </div>
                </div>`;
                    
     // headeris
    let HTML = `<div class="row">
                    <div class="section-title text-center">
                        <h2 class="section-heading">Testimonial</h2>
                        <div class="horizontal-line">
                            <div class="top-line"></div>
                            <div class="bottom-line"></div>
                        </div>
                    </div>
                </div>
                ${testHTML}`;
document.querySelector('#testimonials').innerHTML = HTML;
}

function testimonialSlide() {
    
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
}

function setUpTestimonials() {
    renderTestimonials(testimonials);
    testimonialSlide();
}

export default setUpTestimonials;
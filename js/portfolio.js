"use strict"

function renderPortfolio(worksList) {
    let HTML ='';
    let filterHTML = '';
    let galleryHTML = '';


    // sugeneruoti filtravima
    filterHTML = `<div class="item">filter</div>
                <div class="item">filter</div>
                <div class="item">filter</div>
                <div class="item">filter</div>`;
                
    // sugeneruoti darbus
    for (let i=0; i<worksList.length; i++) {
        const work = worksList[i];
        galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}">
                            <img src="./img/portfolio/${work.photo.src}" 
                                alt="${work.photo.alt}">
                            <div class="hover">
                            <div class="fa fa-link"></div>
                            </div>
                            <div class="bot-text">
                                    <a href="${work.link ? work.link : '#'}">${work.content}</a>
                                    <p>${work.description}</p>
                                </div>
                        </div>`;
    }

    // apjungti viska i vientisa HTML
    HTML += `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="gallery-list">
                    ${galleryHTML}
                </div>
            </div>`;

    // pilna HTML iterpiame i DOM
    const DOMgallery = document.querySelector('#portfolio-gallery');
    DOMgallery.innerHTML = HTML;

    // prikabinti evet listener, kad galeti filtruoti darbus


    return;
}

renderPortfolio(works);






export default works;

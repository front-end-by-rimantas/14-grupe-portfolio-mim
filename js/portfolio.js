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
                                    <a href="${work.link ? work.link : '#'}" class="portfolio-link">${work.content}</a>
                                    <p class="description">${work.description}</p>
                                </div>
                        </div>`;
    }
    // headeris

    let headerHTML = `<div class="section-title text-center">
                            <h2>About Me</h2>
                            <div class="horizontal-line">
                                <div class="top-line"></div>
                                <div class="bottom-line"></div>
                            </div>
                        </div>`;
    // apjungti viska i vientisa HTML
    HTML += `<div class="row">
                ${headerHTML}
                <div class="col-12">
                    <div class="gallery">
                        <div class="filter">
                            ${filterHTML}
                        </div>
                        <div class="gallery-list">
                            ${galleryHTML}
                        </div>
                    </div>
                </div>
            </div>`;

    // pilna HTML iterpiame i DOM
    const DOMgallery = document.querySelector('#portfolio');
    DOMgallery.innerHTML = HTML;

    // prikabinti evet listener, kad galeti filtruoti darbus


    return;
}

renderPortfolio(works);






export default works;

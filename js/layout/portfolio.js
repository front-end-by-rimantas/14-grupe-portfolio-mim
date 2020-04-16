"use strict"

export default function renderPortfolio(worksList) {
    let HTML ='';
    let filterHTML = '';
    let galleryHTML = '';


    // sugeneruoti filtravima
    let uniqueTags = [];
    for (let i = 0; i < worksList.length; i++) {
        const tags = worksList[i].tags;
        for (let t = 0; t < tags.length; t++) { 
            if (uniqueTags.indexOf(tags[t].toLowerCase()) === -1) {
                uniqueTags.push(tags[t].toLowerCase());
            } 
        }
    }  
    
    filterHTML = `<div class="item horizontal-line">All</div>`;
    for (let i = 0; i < uniqueTags.length; i++) {
        filterHTML += `<div class="item">${uniqueTags[i].toLowerCase()}</div>`;
    }


                
    // sugeneruoti darbus
    for (let i=0; i<worksList.length; i++) {
        const work = worksList[i];
        galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}"
                            data-tags="${work.tags}">
                            <img src="./img/portfolio/${work.photo.src}" 
                                alt="${work.photo.alt}" class="portfolio-img">
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
    const filters = DOMgallery.querySelectorAll('.filter > .item');
    for (let i = 0; i < filters.length; i++) {
        const element = filters[i];
        element.addEventListener('click', filterGallery);
    };
    return;
}
function filterGallery( event ) {
    document.querySelector('.filter > .item.horizontal-line').classList.remove('horizontal-line');
    event.target.classList.add('horizontal-line');

    const filterTag = event.target.textContent.toLowerCase();
    const works = document.querySelectorAll('.gallery > .gallery-list > .item');
    if (filterTag === 'all') {
        for (let i = 0; i < works.length; i++) {
            works[i].classList.remove('hide');
        }
        return;
    }
   
    for (let i = 0; i < works.length; i++) {
        const work = works[i];
        const hasTags = works[i].dataset.tags.toLowerCase().split(',').indexOf(filterTag);
        if (hasTags >= 0) {
            work.classList.remove('hide')
        } else {
            work.classList.add('hide')
        }
    }
    
}
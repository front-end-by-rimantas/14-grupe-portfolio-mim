"use strict"

function renderPortfolio(worksList) {
    let HTML ='';
    let filterHTML = '';
    let galleryHTML = '';


    // sugeneruoti filtravima
    let uniqueTags = [];
    for (let i = 0; i < worksList.length; i++) {
        const tags = worksList[i].tags;
        for (let t = 0; t < tags.length; t++) { 
            if (uniqueTags.indexOf(tags[t]) === -1) {
                uniqueTags.push(tags[t]);
            } 
        }
    }  
    
    filterHTML = `<div class="item horizontal-line">All</div>`;
    for (let i = 0; i < uniqueTags.length; i++) {
        filterHTML += `<div class="item">${uniqueTags[i]}</div>`;
    }


                
    // sugeneruoti darbus
    for (let i=0; i<worksList.length; i++) {
        const work = worksList[i];
        galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}">
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


    return;
}

renderPortfolio(works);
    // event listener
    const item = document.querySelector('.filter .item');
   
    item.addEventListener('click', function () {
    
    return item.classList.add("horizontal-line");
    
    });
    // const times = document.querySelector('#main_header .fa-times');
    // times.addEventListener('click', function () {

    // return mainHeader.classList.remove("show-menu");

    // });
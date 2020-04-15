"use strict";

const logo = document.querySelector("img");
logo.addEventListener('click', openOverlay);
const body = document.querySelector("body");

function openOverlay (){
    body.insertAdjacentHTML("afterbegin", "<div class='overlay'></div>")
    return
}

window.addEventListener('scroll', funcScroll);

function funcScroll(){
    return
}

window.addEventListener('scroll', () => {
    headerScroll();  
    fixedHeader();
});
headerScroll();
fixedHeader();


function headerScroll(){
    //einamoji scrolo vieta (aukstis)
    //susidarome sarasa
    let links = [];
    let DOMlinks = document.querySelectorAll(".header > .row nav a");
    const headerHeight = document.querySelector("#main_header").offsetHeight;
    const height = window.scrollY + headerHeight;




    for(let i = 0; i<DOMlinks.length; i++){
        const link = DOMlinks[i];
       const href = link.href;
       const split = href.split("#");
       if(split.length > 1){
        links.push("#" + split[1]);
       }
    }
   
    //randame aukscio pozicija
    let sectionHeigths = [];
        for (let i = 0; i<links.length; i++){
            const link = links[i];
            if (link === "#"){
                sectionHeigths.push(0);
                
            }else{
                const section = document.querySelector(link);
                sectionHeigths.push(section.offsetTop)
            }
        }

    let wantedSection = 0;
    //nustatome kuri is dominanciu yra artimiausia mano esamai pozicijai
    for(let i=0; i<sectionHeigths.length; i++){
        const sectionH = sectionHeigths[i];

        if(sectionH <= height){
            wantedSection = i;
        }else{
            break;
        }
    }
        //jeigu randame artimiausia dominancia
            //pries tia buvusi nuoroda header > nav netenka active klases
            //naujoji nuoroda
            



            document.querySelector(`#main_header nav > a.active`).classList.remove('active');
            document.querySelector(`#main_header nav > a[href = "${links[wantedSection]}"]`).classList.add('active'); 
   
    return;

}




function fixedHeader() {
    let firstHeader = document.querySelector('.container.header')
    

    if (window.scrollY > 200) {
        firstHeader.classList.add('fixedHeader');
        //firstHeader.classList.add('logoMin');
    }
    if (window.scrollY === 0){
        firstHeader.classList.remove('fixedHeader');
        //firstHeader.classList.remove('logoMin');
    }
    return
}


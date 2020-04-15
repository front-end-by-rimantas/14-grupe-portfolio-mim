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

function headerScroll(){

    //einamoji scrolo vieta (aukstis)
    //const height = window.scrollY
    //susidarome sarasa
    let links = [];
    let DOMlinks = document.querySelectorAll(".header > .row nav a");
    console.log(DOMlinks);

    for(let i = 0; i<DOMlinks.length; i++){
        const link = DOMlinks[i];
       const href = link.href;
       const split = href.split("#");
       if(split.length > 1){
        links.push("#" + split[1]);
       }
    
    }

    console.log(links)

    //randame aukscio pozicija
    let sectionHeigths = [];
        for (let i = 0; i<links.length; i++){
            const link = links[i];
            console.log(link);
            if (link === "#"){
                sectionHeigths.push(0);
                
            }else{
                const section = document.querySelector(link);

                //neveikia, nes nera ko matuoti, nera sekciju
                console.log(section.offSetTop)
                sectionHeigths.push("??")

            }
        }
        console.log(sectionHeigths);


    //nustatome kuri is dominanciu yra artimiausia mano esamai pozicijai
        //jeigu randame artimiausia dominancia
            //pries tia buvusi nuoroda header > nav netenka active klases
            //naujoji nuoroda

    return;

}

headerScroll()

//neveikia kol kas

function fixedHeader() {
    let firstHeader = document.querySelector('.container.header')
    console.log(firstHeader)

    if (window.scrollY > 200) {
        firstHeader.classList.add('fixedHeader');
        firstHeader.classList.add('logoMin');
    }
    if (window.scrollY === 0 ) {
        firstHeader.classList.remove('fixedHeader');
        firstHeader.classList.remove('logoMin');
    }


    return
}

fixedHeader()
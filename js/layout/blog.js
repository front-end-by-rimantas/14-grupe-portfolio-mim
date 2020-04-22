"use strict";

function renderBlog(blogContent){
    const row = document.querySelector(".row.blog")
    
    if (!Array.isArray(blogContent)){
        return console.error("Reikia Array");
    }

    let HTML = ""
    for(let i=0; i<blogContent.length; i++){
        HTML+=` <div class = "blog-column col-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <img src=${blogContent[i].image} alt="blog-item">
        <div class = "second-row">
            <div class = "date-column">
                ${blogContent[i].calendarIcon}
                <div class = "date">${blogContent[i].date}</div>
            </div>
            <div class = "comment-column">
                ${blogContent[i].commentIcon}
                ${renderComments(blogContent[i].comment)}
           
            </div>
        </div>
        <div class = "third-row">
            <h4>${blogContent[i].h4}</h4>
          <!-- nuoroda į vidinį -->    
            <a href="#"> <i class="fas fa-plus"></i></a>
        </div>
     </div>`
  
    }
    return row.innerHTML = HTML;
}
    function renderComments(comment){
       
        let text = comment.commentText;
        let number = comment.commentNumber;
        let HTML = "";
        
        for (let i = 0; i<text.length; i++){
            let newtext = "";
            if (number === 0){
                newtext = text[0];
            }
            if (number === 1){
                newtext = text[1];
            }
            if (number > 1){
                newtext = text[2];
            }

        HTML += `${number} ${newtext}`

        return HTML
    }
}

renderBlog(blog)

//animacijos nuo paspaudimo ant blogo paveiksliukų

let blogRow = document.querySelector(".row.blog");
let blogImArr = blogRow.querySelectorAll("img")
let body = document.querySelector("body");

console.log(blogImArr)

for (let i = 0; i<blogImArr.length; i++){
    let activeElement = blogImArr[i];
 
    activeElement.addEventListener('click', openOverlayS);
    function openOverlayS (){
        body.insertAdjacentHTML("afterbegin", `<div class = "overlayLogoS">
        <div class = "logoWhite">
            <img src="./img/light-logo.png" alt="Logo">
        </div>
    </div>`);
    
    let overlayLogoS = document.querySelector(".overlayLogoS")
    setTimeout(function(){
        overlayLogoS.remove();
    }, 2000);
        return
    }
}


let blogThirdArr = blogRow.querySelectorAll(".third-row")
for (let i = 0; i<blogThirdArr.length; i++){
    let activeElement = blogThirdArr[i];
    activeElement.addEventListener('click', openOverlayS);
    function openOverlayS (){
        body.insertAdjacentHTML("afterbegin", `<div class = "overlayLogoS">
        <div class = "logoWhite">
            <img src="./img/light-logo.png" alt="Logo">
        </div>
    </div>`);
    
    let overlayLogoS = document.querySelector(".overlayLogoS")
    setTimeout(function(){
        overlayLogoS.remove();
    }, 2000);
        return
    }

}




"use strict";



function renderBlog(blogContent){
    const row = document.querySelector(".row.blog")
    
    if (!Array.isArray(blogContent)){
        return console.error("Reikia Array");
    }

    let HTML = ""
    for(let i=0; i<blogContent.length; i++){
        HTML+=` <div class = "blog-column col-4">
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

        HTML += `${number}${newtext}`

        return HTML
    }
}

renderBlog(blog)
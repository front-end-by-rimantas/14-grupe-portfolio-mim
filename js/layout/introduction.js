/** @format */

"use strict";

class Introduction {
  constructor(target) {
    this.target = target;
    this.render();
  }

  render() {
    const DOM = document.getElementById(this.target);
    if (!DOM) {
      throw "ERROR: OMG.. go fix Achievements!!";
    }

    let HTML = "";
    HTML += `<div class="row">
        <div class = "col-6 col-md-7 m-l-md-0 col-sm-12 col-xs-11 m-l-xs-1">
            <div class = "text">
                <h5>Hello, my name is</h5>
                <h1>Andrew Jordan</h1>
                <p>On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled demord by</p>
                <a class="btn lg-btn" href="#portfolio">MY WORK</a>
            </div>
        </div>
        <div class = "col-6 col-md-5 m-l-md-0 col-sm-12 col-xs-11 m-l-xs-1">
            <div class = "image">
            <img src="./img/author.png" alt="author">
            </div>
        </div> 
    </div>`;

    return (DOM.innerHTML = HTML);
  }
}

export default Introduction;

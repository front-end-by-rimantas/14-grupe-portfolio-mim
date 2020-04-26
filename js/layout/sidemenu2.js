"use strict"
import side from './SideMenuData.js';

export default class renderSideList {
    constructor(render) {
        this.render = document.getElementById(render);

        this.init();
    }

    init() {
        this.renderSide(side);
    }

    renderSide(sideList) {
            let HTML = '';
            if ( !Array.isArray(sideList) ) {
                return console.log('ERROR: data is not arrey..');  
            }
            if ( sideList.length === 0 ) {
                return console.log('ERROR: arrey cannot be empty');  
            }
            for (let i = 0; i < sideList.length; i++) {
                const side = sideList[i];
                HTML += `<div class="${side.class}">
                            <a href="${side.id}" class="side-menu-box">${side.description}</a>
                        </div>`;
            }
            this.render.insertAdjacentHTML('afterbegin', HTML);
        }
}
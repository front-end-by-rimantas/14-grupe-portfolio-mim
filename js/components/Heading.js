export default class HeadingClass {
    constructor ( textStr ) {
        this.rowDom = null
        this.htmlStr = null
        this.textStr = textStr
        this.initMeth()
    }

    initMeth() {
        this.renderMeth()
    }

    renderMeth() {
        this.rowDom = document.createElement( 'div' )
        this.rowDom.classList = 'row' 
        let sectionTitleDom = document.createElement( 'div' )
        sectionTitleDom.classList = 'col-xs-12'
        let widthDom = document.createElement( 'div' )
        widthDom.classList = 'section-title text-center'
        let headerDom = document.createElement( 'h2' )
        headerDom.innerText = this.textStr
        let horizontalLineDom = document.createElement( 'div' )
        horizontalLineDom.classList = 'horizontal-line'
        let topLineDom = document.createElement( 'div' )
        topLineDom.classList = 'top-line'
        let bottomLineDom = document.createElement( 'div' )
        bottomLineDom.classList = 'bottom-line'

        this.rowDom.appendChild( sectionTitleDom )
        sectionTitleDom.appendChild( widthDom )
        widthDom.appendChild( headerDom )
        widthDom.appendChild( horizontalLineDom )
        horizontalLineDom.appendChild( topLineDom )
        horizontalLineDom.appendChild( bottomLineDom )

        this.htmlStr = `<div class="row">
            <div class="section-title text-center">
                <h2>${ this.textStr }</h2>
                <div class="horizontal-line">
                    <div class="top-line"></div>
                    <div class="bottom-line"></div>
                </div>
            </div>
        </div>`
    }
}
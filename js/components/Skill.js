export default class SkillClass {
    constructor ( percentage, title ) {
        this.skillBarDom = null
        this.htmlStr = null
        this.percentage = percentage
        this.title = title
        this.initMeth()
    }

    initMeth() {
        this.renderMeth()
    }

    renderMeth() {
        this.skillBarDom = document.createElement( 'div' )
        this.skillBarDom.classList = 'skill-bar'
        this.skillBarDom.dataset.percentage = this.percentage
        let headerDom = document.createElement( 'h4' )
        headerDom.classList = 'progress-title-holder'
        let titleDom = document.createElement( 'span' )
        titleDom.classList = 'progress-title'
        titleDom.innerText = this.title

        let wrapperDom = document.createElement( 'span' )
        wrapperDom.classList = 'progress-wrapper'
        let markDom = document.createElement( 'span' )
        markDom.classList = 'progress-mark'
        markDom.style.left = this.percentage + '%'
        let valueDom = document.createElement( 'span' )
        valueDom.classList = 'percent'
        valueDom.innerText = this.percentage + '%'

        let outerDom = document.createElement( 'div' )
        outerDom.classList = 'progress-outter'
        let contentDom = document.createElement( 'div' )
        contentDom.classList = 'progress-content'
        contentDom.style.width = this.percentage + '%'

        this.skillBarDom.appendChild( headerDom )
        headerDom.appendChild( titleDom )
        headerDom.appendChild( wrapperDom )
        wrapperDom.appendChild( markDom )
        markDom.appendChild( valueDom )
        this.skillBarDom.appendChild( outerDom )
        outerDom.appendChild( contentDom )

        this.htmlStr =
        `
            <div class="skill-bar" data-percentage="${ this.percentage }%">
                <h4 class="progress-title-holder">
                    <span class="progress-title">
                        ${ this.title }
                    </span>
                    <span class="progress-wrapper">
                        <span class="progress-mark" style="left: ${ this.percentage }%;">
                            <span class="percent">
                            { this.percentage }%
                            </span>
                        </span>
                    </span>
                </h4>
                <div class="progress-outter">
                    <div class="progress-content" style="width: ${ this.percentage }%;">
                    </div>
                </div>
            </div>
        `
    }
}
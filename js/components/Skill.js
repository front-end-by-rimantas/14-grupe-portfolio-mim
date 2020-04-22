export default class SkillClass {
    constructor ( percentage, title ) {
        this.skillBarDom = null
        this.percentage = percentage
        this.title = title
        this.interval = 2000
        this.initMeth()
    }

    initMeth() {
        this.renderMeth()
        window.addEventListener( 'scroll', this.scrollListenerFunc )
    }

    scrollListenerFunc = () => {
        this.initiateAnimationMeth()
    }

    initiateAnimationMeth() {
        if ( this.skillBarDom.offsetTop - window.innerHeight < window.scrollY ) {
            console.log( this.percentage, 'visible' )
            window.removeEventListener( 'scroll', this.scrollListenerFunc )

            this.markDom.animate(
                [
                    {left: '0%'},
                    {left: `${this.percentage}%`}
                ], {
                    name: '',
                    direction: 'normal',
                    timing/*-function*/: 'ease',
                    fill/*-mode*/: 'forwards',
                    duration: this.interval,
                    delay: 0,
                    iterations: 1
                }
            )
            this.contentDom.animate(
                [
                    {width: '0%'},
                    {width: `${this.percentage}%`}
                ], {
                    name: '',
                    direction: 'normal',
                    timing/*-function*/: 'ease',
                    fill/*-mode*/: 'forwards',
                    duration: this.interval,
                    delay: 0,
                    iterations: 1
                }
            )

            this.count = 0
            this.max = 101
            this.increment = ( this.percentage / this.max ).toFixed( 2 )
            
            this.waitTime = this.interval / this.max
            this.timer = setInterval( () => {
                if ( this.count === this.max ) 
                    clearInterval( this.timer )
                else 
                    this.valueDom.innerText = ( this.count * this.increment ).toFixed( 0 ) + '%'
                this.count++
            }, this.waitTime )
        }
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
        this.markDom = document.createElement( 'span' )
        this.markDom.classList = 'progress-mark'
        this.valueDom = document.createElement( 'span' )
        this.valueDom.classList = 'percent'
        this.valueDom.innerText = this.percentage + '%'
        let outerDom = document.createElement( 'div' )
        outerDom.classList = 'progress-outter'
        this.contentDom = document.createElement( 'div' )
        this.contentDom.classList = 'progress-content'

        this.skillBarDom.appendChild( headerDom )
        headerDom.appendChild( titleDom )
        headerDom.appendChild( wrapperDom )
        wrapperDom.appendChild( this.markDom )
        this.markDom.appendChild( this.valueDom )
        this.skillBarDom.appendChild( outerDom )
        outerDom.appendChild( this.contentDom )
    }
}
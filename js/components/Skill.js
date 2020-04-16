export default class SkillClass {
    constructor ( percentage, title ) {
        this.skillBarDom = null
        this.htmlStr = null
        this.percentage = percentage
        this.title = title
        this.initMeth()
    }

    initMeth() {

        // const observer = new MutationObserver(function(){
        //     console.log(this.skillBarDom.style.display)
        //     if(this.skillBarDom.style.display != 'none'){
        //         console.log(this.percentage)
        //     }
        // });
        // observer.observe(this.skillBarDom, { attributes: true, childList: true });

        this.renderMeth()

        // // this is the target which is observed
        // var parent = this.skillBarDom;
        // var target = this.contentDom;
        // var value = this.percentage

        // // configure the intersection observer instance
        // var intersectionObserverOptions = {
        // root: null,
        // rootMargin: '275px',
        // threshold: 1.0
        // }
            
        // var observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);

        // // provide the observer with a target
        // observer.observe(parent);

        // function onIntersection(entries){
        // entries.forEach(entry => {
        //     // console.clear();
        //     // console.log(entry.intersectionRatio)
        //     parent.classList.toggle('visible', entry.intersectionRatio > 0);
            
        //     // Are we in viewport?
        //     if (entry.intersectionRatio > 0) {
        //         // Stop watching 
        //         // observer.unobserve(entry.target);
        //         console.log(value, 'visible')
        //         target.style.animation = 'load-animation 2s ease 5s 1 normal forwards'
        //     }
        //     else target.style.animation = ''
        // });
        // }


        // document.styleSheets[0].insertRule('\
		// 	@keyframes load-animation {\
		// 		from { width: 0%; }\
		// 		to   { width: ${ this.percentage }%; }\
		// 	}'
		// )
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
        let contentwrapperDom = document.createElement( 'div' )
        contentwrapperDom.classList = 'progress-content-wrapper'
        contentwrapperDom.style.width = this.percentage + '%'
        this.contentDom = document.createElement( 'div' )
        this.contentDom.classList = 'progress-content'
        // this.contentDom.style.animation = 'load-animation 2s ease 1s 1 normal forwards'
        this.contentDom.animate(
            [
                {width: '0%'},
                {width: `${this.percentage}%`}
            ], {
                duration: 1000,
                iterations: Infinity
            }
        // 2s ease 0s 1 normal forwards`
        )

        this.skillBarDom.appendChild( headerDom )
        headerDom.appendChild( titleDom )
        headerDom.appendChild( wrapperDom )
        wrapperDom.appendChild( markDom )
        markDom.appendChild( valueDom )
        this.skillBarDom.appendChild( outerDom )
        outerDom.appendChild( contentwrapperDom )
        contentwrapperDom.appendChild( this.contentDom )

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
                    <div class="progress-content" style="width: ${ this.percentage }%;"></div>
                </div>
            </div>
        `
    }
}
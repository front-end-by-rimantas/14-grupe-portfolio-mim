import HeadingClass from'../components/Heading.js'
import SkillClass from'../components/Skill.js'

export default class AboutSectionClass {
    constructor ( parentIdStr ) {
        this.parentDom = document.getElementById( parentIdStr )
        this.initMeth()
    }

    initMeth() {
        if ( !this.parentDom ) console.error( 'About section is not present in main HTML, please add it!' )        
        this.drawSectionMeth()
    }

    drawSectionMeth() {
        let sectionDom = document.createElement( 'div' )
        sectionDom.classList = 'section about-area'
        let containerDom = document.createElement( 'div' )
        containerDom.classList = 'container'

        const headingObj = new HeadingClass( 'About Me' )

        let rowDom = document.createElement( 'div' )
        rowDom.classList = 'row' 
        let leftDom = document.createElement( 'div' )
        leftDom.classList = 'col-6 col-sm-6 col-xs-12'
        let headerDom = document.createElement( 'h3' )
        headerDom.classList = 'bold capitalize'
        headerDom.innerText = 'Howdy!'
        let textDom = document.createElement( 'p' )
        textDom.classList = 'line-height-28 font-16 p'
        textDom.innerText = 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are?'
        let buttonHolderDom = document.createElement( 'div' )
        buttonHolderDom.classList = 'mt-20'
        let buttonDom = document.createElement( 'a' )
        buttonDom.classList = 'btn a'
        buttonDom.href = '//wp.regaltheme.com/mim/wp-content/uploads/2017/06/Basic_Curriculum_Vitae_example.pdf'
        buttonDom.target = 'blank'
        buttonDom.innerText = 'DOWNLOAD MY CV'

        let rightDom = document.createElement( 'div' )
        rightDom.classList = 'right col-6 col-md-5 col-sm-6 col-xs-12'
        let rightHolderDom = document.createElement( 'div' )
        rightHolderDom.classList = 'skill-progress'    
        skills_data_Arr.forEach( 
            ( skillPar ) => {
                let skillObj = new SkillClass( skillPar.percentage, skillPar.title )
                rightHolderDom.appendChild( skillObj.skillBarDom )
            }
        )
        
        this.parentDom.appendChild( sectionDom )
        sectionDom.appendChild( containerDom )
        containerDom.appendChild( headingObj.rowDom )
        containerDom.appendChild( rowDom )
        rowDom.appendChild( leftDom )
        rowDom.appendChild( rightDom )
        rightDom.appendChild( rightHolderDom )
        leftDom.appendChild( headerDom )
        leftDom.appendChild( textDom )
        leftDom.appendChild( buttonHolderDom )
        buttonHolderDom.appendChild( buttonDom )

        // this.parentDom.innerHTML = `${ headingObj.htmlStr }`
        // use html version in non OOP html generation like above, first create or pass an object
    }
}
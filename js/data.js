// Side menu
const contacts = [
    
        {
            i: '<i class="fa fa-phone"></i>',
            h4: "Phone",
            class: "phone",
            atext: "+88 669 658 6586"
        },
    {
        
            i: '<i class="fa fa-envelope-o"></i>',
            h4: "Email",
            class: "email",
            atext: "email@domain.com"
        
    },
    {
    
            i: '<i class="fa fa-university"></i>',
            h4: "Location",
            class: "location",
            atext: "Location Name,Here.US"
    }
]


const navigation = [
    {
        ref: "#",
        text: "Home",
        class: "active"
    },
    {
        ref: "#about",
        text: "About",
        class: "ref"
    },
    {
        ref: "#portfolio",
        text: "Portfolio",
        class: "ref"
    },
    {
        ref: "#services",
        text: "Services",
        class: "ref"
    },
    {
        ref: "#blog",
        text: "Blog",
        class: "ref"
    },
    {
        ref: "#contact",
        text: "Contact",
        class: "ref"
    },

]


const side = [
    {
        description: 'Home',
        class: 'element bot-border hov-dark',
        id: '#main_header'
    },
    {
        description: 'About',
        class: 'element bot-border hov-dark',
        id: '#about'
    },
    {
        description: 'Portfolio',
        class: 'element bot-border hov-dark',
        id: '#portfolio'
    },
    {
        description: 'Services',
        class: 'element bot-border hov-dark',
        id: '#services'
    },
    {
        description: 'Blog',
        class: 'element bot-border hov-dark',
        id: '#blog'
    },
    {
        description: 'Contact',
        class: 'element bot-border hov-dark',
        id: '#contact'
    }
];

// About section
const skills_data_Arr = [
    {
        percentage: 90,
        title: 'DESIGN'
    },
    {
        percentage: 85,
        title: 'HTML & CSS'
    },
    {
        percentage: 95,
        title: 'WORDPRESS'
    }
];

// Portfolio + gallery
const works = [
    {
        photo: {
            src: 'Blond-Industrial-Design-Headphone-Design-Barrel-Iso-368x478.jpg',
            alt: 'Headphone'
        },
        title: 'Headphone',
        link: '#',
        content: 'New Portfolio',
        description: 'Garden',
        tags: ['design', 'new'],
        size: 2,
        newClass: 'slide-left'
    },
    {
        photo: {
            src: 'portfolio-5-1.jpg',
            alt: 'Headset'
        },
        title: 'Headset',
        link: '#',
        content: 'Portfolio Three',
        description: 'Garden',
        tags: ['design', 'print'],
        size: 1,
        newClass: 'slide-bottom'
    },    
    {
        photo: {
            src: 'portfolio-7-368x478.jpg',
            alt: 'Bottle'
        },
        title: 'Bottle',
        link: '#',
        content: 'Portfolio One',
        description: 'Fliyer',
        tags: ['new', 'print'],
        size: 2,
        newClass: 'slide-top'
    },    
    {
        photo: {
            src: 'portfolio-4-1.jpg',
            alt: 'Chair'
        },
        title: 'Chair',
        link: '#',
        content: 'Mim Contrary To Three',
        description: 'Poster',
        tags: ['print', '3D work'],
        size: 1,
        newClass: 'slide-top'
    },
    {
        photo: {
            src: 'portfolio-3-1.jpg',
            alt: 'Liquid'
        },
        title: 'Liquid',
        link: '#',
        content: 'Contrary To Popular Belief',
        description: 'Book Cover',
        tags: ['print'],
        size: 1,
        newClass: 'slide-left'
    },
    {
        photo: {
            src: 'portfolio-1-2-368x478.jpg',
            alt: 'Box'
        },
        title: 'Box',
        link: '#',
        content: 'Contrary To Popular Belief',
        description: 'HTML',
        tags: ['web', 'new', '3D work'],
        size: 2,
        newClass: 'slide-right'
    },
    {
        photo: {
            src: 'portfolio-2-2-368x478.jpg',
            alt: 'Clock'
        },
        title: 'Clock',
        link: '#',
        content: 'Popular Belief Three',
        description: 'Graphics',
        tags: ['web', 'design'],
        size: 2,
        newClass: 'slide-right'
    },
    {
        photo: {
            src: 'portfolio-7-1.jpg',
            alt: 'Hygiene'
        },
        title: 'Hygiene',
        link: '#',
        content: 'Contrary To Popular Belief',
        description: 'WordPress',
        tags: ['web'],
        size: 1,
        newClass: 'slide-bottom'
    }
]; 

const services = [
    {
        icon: 'fa-desktop',
        title: 'UI/UX DESIGN',
        margin: `<div class="break"></div>`,
        description: `There are many variatio
        ns of pssages of Lorm available, bu in some form`,
        class: 'service-box'
    },
    {
        icon: 'fa-heart-o',
        title: 'WEB DESIGN',
        margin: `<div class="break"></div>`,
        description: `There are many variatio
        ns of pssages of Lorm available, bu in some form`,
        class: 'service-box'
    },
    {
        icon: 'fa-crosshairs',
        title: 'MINIMAL DESIGN',
        margin: `<div class="break"></div>`,
        description: `There are many variatio
        ns of pssages of Lorm available, bu in some form`,
        class: 'service-box'
    },
    {
        icon: 'fa-wordpress',
        title: 'DEVELOPMENT',
        margin: `<div class="break"></div>`,
        description: `There are many variatio
        ns of pssages of Lorm available, bu in some form`,
        class: 'service-box'
    }
];

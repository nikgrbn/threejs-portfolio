export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Education',
        href: '#education',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Guess The Place - Android Game',
        desc: "75,000+ downloads on Play Market and counting! Guess The Place is a 'geoguessr' alike published app." +
          " Featuring multi-player, in-app purchases, AdMob, Firebase, Server functions and image processing." +
          ' Dive into different game-modes and user activities.',
        subdesc:
            "Built in Android Studio with Java, Kotlin and XML. It utilizes Google APIs and MVVM principles." +
        " Python for server side and cloud function in JS allow event tracking and multiplayer management.",
        href: 'https://play.google.com/store/apps/details?id=com.guesstheplace.guesstheplace',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/guesstheplace.png',
        logoStyle: {
            backgroundColor: '#35183c',
            border: '0.2px solid #50255AFF',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight-guesstheplace.png',
        tags: [
            {
                name: 'androidstudio',
            },
            {
                name: 'java',
            },
            {
                name: 'firebase',
            },
            {
                name: 'python',
            },
        ],
        upText: "Guess",
        downText: "The Place",
    },
    {
        title: 'Hebrew Summarizer - AI Model',
        desc: 'Hebrew Text Summarizer is a Natural Language Processing ML model developed in python.' +
          ' It gives a short, quick, abstract summarization of any piece of content fed to it.' +
          ' Made especially for Hebrew language. ' +
          " Developed in 2021, before 'AI-Boom' it does no worse of a job than ChatGPT!",
        subdesc:
            'Our LSA model processes a dataset of thousands Hebrew articles and utilizes' +
          ' gensim and FastText pythons libs to decompose them into a matrix with SVD algorithm.',
        href: 'https://gitlab.com/Rmaps/hebrew-text-summarizer',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/hebrewsummarizer.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                name: 'python',
            },
            {
                name: 'tensorflow',
            },
            {
                name: 'js',
            },
        ],
        upText: "Hebrew",
        downText: "Summarizer",
    },
    {
        title: 'Portfolio - This Website',
        desc: 'I wanted to make my portfolio interactive and interesting. What is more interesting than 3D?' +
          ' Luckily Three Fiber framework helped unwrap my imagination and come up with this website.',
        subdesc:
            'Developed in React and Three.js, with Tailwind for modern stylistic.' +
          ' Prop design made mostly in Blender and Photoshop.',
        href: '/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/ng.png',
        logoStyle: {
            backgroundColor: '#222222',
            border: '0.2px solid #373737',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                name: 'react',
            },
            {
                name: 'threejs',
            },
            {
                name: 'tailwind',
            },
            {
                name: 'photoshop',
            },
        ],
        upText: "Portfolio",
        downText: "",
    },
    {
        title: 'Contact Manager - React App',
        desc: 'A simple Contact Manager application built with React. It allows users to add,' +
          ' view, edit, and delete contacts. The application also includes a search functionality to filter contacts.',
        subdesc:
            'App utilizes such key concepts as React Hooks, Routers and JSON Server for simulating a REST' +
          ' API to manage contacts.',
        href: 'https://github.com/nikgrbn/contact-manager',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/contact.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                name: 'react',
            },
            {
                name: 'js',
            },
        ],
        upText: "Contact",
        downText: "Manager App",
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.045 : isMobile ? 0.055 : 0.060,
        deskPosition: isMobile ? [0.5, -3.5, 0] : [0.25, -4.0, 0],
        cubePosition: isSmall ? [3, -5, 0] : isMobile ? [4, -5, 0] : isTablet ? [5, -5, 0] : [7, -5.5, 0],
        reactLogoPosition: isSmall ? [2, 5, 0] : isMobile ? [3, 5, 0] : isTablet ? [4, 4, 0] : [7, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-5, -10, -10] : isTablet ? [-9, -7, -10] : [-11, -11, -10],
        bookScale: 0.9,
        bookPosition: [-9.1, -0.9, -0.3],
        bookRotation: [-5, -6.4, -0.2],
        androidLogoScale: 0.3,
        androidLogoPosition: isSmall? [-1.2, 2.2, 9.4] : isMobile ? [-2, 2, 9.4] : isTablet ? [-3, 2.7, 9.4] : [-4, 2.7, 9.4],
        androidLogoRotation: [0.4, 0.6, -0.2]

    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Bar-Ilan University',
        pos: 'Bachelor\'s degree, Computer Science',
        duration: '2023 - Present',
        title: "My coursework covers a range of areas, including data structures," +
          " calculus, and object-oriented programming. I've tackled exams and projects" +
          " that apply these principles, with an " +
          " average score of 86.",
        icon: '/assets/bar-ilan.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Magshimim',
        pos: 'Cyber Education Center',
        duration: '2020 - 2022',
        title: "An intensive three-year flagship program, provided me with in-depth" +
          " training in such fields as networking, cybersecurity and OS, " +
          " as well as in programming in C/C++, Python, ASM and more.",
        icon: '/assets/magshimim.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Moshe Sharet',
        pos: ' Graduate with Honors',
        duration: '2022',
        title: "In high school I excelled in Mathematics, Physics and Computer Science," +
          " all with avg. score of 100. I completed the 5-point program in Android Development " +
          "and graduated with honors.",
        icon: '/assets/sharet.png',
        animation: 'salute',
    },
];
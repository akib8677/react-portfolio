import { FaPaintBrush } from 'react-icons/fa';

export const profile = {
    title: 'WELCOME TO MY WORLD',
    profession: 'a Web Devloper & Designer.',
    description: 'I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.',
    title_2: 'FIND WITH ME',
    icons: [
        {
            fabLink: '#',
            instaLink: '#',
            linkedInLink: '#'
        }
    ],
    imageUrl: 'image/profile3.jpg'
}

export const skills = {
    title: 'MY SKILLS',
    tech: [
        {
            iconLink: FaPaintBrush,
            title: 'Design + Development',
            description: 'Clean, modern design - optimized for performence, search engines, and converting users to customers.'
        },
        {
            title: 'Technology',
            description: 'Combined all the latest technologies to a progressive wepsite.'
        },
        {
            title: 'Always Responsive',
            description: 'A responsive design makes your websites accessible to all users, regardlessof their device.'
        }
    ],
    lang: [
        {
            name: 'HTML',
            percentage: '75%'
        },
        {
            name: 'CSS',
            percentage: '85%'
        },
        {
            name: 'BOOTSTRAP',
            percentage: '90%'
        },
        {
            name: 'REACT',
            percentage: '65%'
        },
        {
            name: 'NODEJS',
            percentage: '80%'
        },
        {
            name: 'ANGULAR',
            percentage: '70%'
        }
    ]
}

export const footer = {
    name: 'Akib',
    description: '© 2022. All rights reserved by Tech Private Limited.',
    imageUrl: 'image/logo_react_portfolio.png'
}

export const project = {

    title: 'PROJECTS',
    lang_list: [
        { name: 'All' },
        { name: 'Angular' },
        { name: 'React' },
        { name: 'Nodejs' }
    ],
    card_list: [
        {
            imageUrl: 'image/contact_img.png',
            title: 'Webapp Development',
            lang_1: 'Angular',
            lang_2: 'Firebase',
            lang_3: 'HTML/CSS',
            lang_4: 'nodejs',
        }
    ]
}
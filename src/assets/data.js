import ahg from './images/ahg.png';
import bja from './images/bja.png';
import Felectrical from './images/Felectrical.png';
import git_search from './images/git_search.png';
import Mtn from './images/Mtn.png';
import Restate from './images/Restate.png';
import samipay from './images/samipay.png';



export const projects = [
    {
        'id': 1,
        "name": "AHG Security",
        "desc": "Business type website developed with React | Javascript | Html | CSS | Netlify",
        image: `${ahg}`,
        link: 'https://ahgsecurity.netlify.app/'

    },
    {
        'id': 2,
        "name": "BJA Chemicals",
        "desc": "Food production website developed with PHP | Wordpress | MySql | Cpanel",
        image: `${bja}`,
        link: 'https://bjachemicals.com/'
    },
    {
        'id': 3,
        "name": "Fiston Electrical SA",
        "desc": "Electrical company's website developed with Wordpress | Elementor | MySql | Cpanel",
        image: `${Felectrical}`,
        link: 'https://fistonelectricalsa.com/'
    },
    {
        'id': 4,
        "name": "Git Search",
        "desc": "Open Source project - developed with HTML | CSS | Javascript | React | Netlify | Git",
        image: `${git_search}`,
        link: '#'
    },
    {
        'id': 5,
        "name": "MTN Portal",
        "desc": "Mtn Private Portal for Data and Airtime built with Sass | Javascript | Php | MySql | Laravel",
        image: `${Mtn}`,
        link: 'https://interactiontelecoms.co.za/'
    },
    {
        'id': 6,
        "name": "Restate",
        "desc": "Real Estate type - Built with Html | Sass | React - Bootstrap | React | Node",
        image: `${Restate}`,
        link: '#'
    },
    {
        'id': 7,
        "name": "Sami Pay",
        "desc": "Web application based, built with Html | Css | MySql | Wordpress | elementor",
        image: `${samipay}`,
        link: 'https://samipay.co.za/'
    }
]

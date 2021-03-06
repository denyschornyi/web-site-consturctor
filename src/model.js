import image from './assets/img.png';
import {TitleBlock, ImgBlock, TextBlock, ColumnBlock} from './classes/blocks';


export const model = [
    new TitleBlock('Constructor to page on Pure JavaScritp', {
        tag: 'h2',
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),

    new ImgBlock(image,  {
        tag: 'img',
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }
    }),
    new TextBlock('Here we go with some text', {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),

    new ColumnBlock([
        'App using only pure Javascript, no frameworks',
        'Using SOLID and OOP prynciples in same App',
        'JavaScript is interesting'
    ], {
        styles: {
            background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
            padding: '2rem',
            color: "#fff",
            'font-weight': 'bold'
        }
    })
];
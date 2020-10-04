import image from './assets/img.png'

export const model = [
    {type: 'title', value: 'Constructor to page on Pure JavaScritp', options:{
        tag: 'h2',
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }},
    {type: 'img', value: image, options: {
        tag: 'img',
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }
    }},
    {type: 'text', value: 'Here we go with some text', options: {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }},
    {type: 'column', value: [
        'App using only pure Javascript, no frameworks',
        'Using SOLID and OOP prynciples in same App',
        'JavaScript is interesting'
    ], options: {
        styles: {
            background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
            padding: '2rem',
            color: "#fff",
            'font-weight': 'bold'
        }
    }},

];
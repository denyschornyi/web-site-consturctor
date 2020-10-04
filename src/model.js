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
    {type: 'text', value: 'Here we go with some text'},
    {type: 'column', value: [
        '11111111',
        '22222222',
        '33333333'
    ]},
    {type: 'img', value: image}
];
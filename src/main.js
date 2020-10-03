import {model} from './model';
import {templates} from './templates';
import './styles/main.css'

const $site = document.querySelector('#site');


model.forEach(block => {
    // let html = '';

    // if(block.type === 'title'){
    //     html = title(block);
    // }
    // else if(block.type === 'text'){
    //     html = text(block);
    // }
    // else if(block.type === 'column'){
    //     html = column(block);
    // }
    // else if(block.type === 'img'){
    //     html = img(block);
    // }

    let toHtml = templates[block.type](block);

    $site.insertAdjacentHTML('beforeend', toHtml);
});

import {model} from './model'
import {title, text, column, img} from './templates'

const $site = document.querySelector('#site');


model.forEach(block => {
    let html = '';

    if(block.type === 'title'){
        html = title(block);
    }
    else if(block.type === 'text'){
        html = text(block);
    }
    else if(block.type === 'column'){
        html = column(block);
    }
    else if(block.type === 'img'){
        html = img(block);
    }

    $site.insertAdjacentHTML('beforeend', html);
});

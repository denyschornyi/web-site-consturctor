import {model} from './model';
import {templates} from './templates';
import './styles/main.css'

const $site = document.querySelector('#site');


model.forEach(block => {
    let toHtml = templates[block.type](block);
    if(toHtml){
        $site.insertAdjacentHTML('beforeend', toHtml);
    }
});

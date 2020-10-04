import {row, col} from './utils'

function title(block){
    return row(col(`<h1>${block.value}</h1>`));
}

function text(block){
    return row(col(`<p>${block.value}</p>`));
}

function column(block){
    let html = block.value.map(el => col(el));
    return row(html.join(''));
}

function img(block){
    return row(`<img src="${block.value}" alt="img" />`);
}


export const templates = {title, text, column, img};
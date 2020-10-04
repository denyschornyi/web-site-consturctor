import {row, col} from './utils'

function title(block){
    const{tag='h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function text(block){
    return row(col(`<p>${block.value}</p>`));
}

function column(block){
    let html = block.value.map(col).join('');
    return row(html);
}

function img(block){
    return row(`<img src="${block.value}" alt="img" />`);
}


export const templates = {title, text, column, img};
import {row, css, col} from './utils'

function title(block){
    const{tag='h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block){
    const {tag = 'p', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function column(block){
    const { styles } = block.options;
    let html = block.value.map(col).join('');
    return row(html, css(styles));
}

function img(block){
    const{tag='h1', styles} = block.options;
    return row(`<${tag} src="${block.value}" alt="img" />`, css(styles));
}


export const templates = {title, text, column, img};
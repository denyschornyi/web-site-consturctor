export function row(content, style = '') {
    return `<div class="row" style="${style}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles) {
    // const keys = ;
    // const array = keys.map(key => {
    //     return 
    // })
    // return array.join(';');

    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}
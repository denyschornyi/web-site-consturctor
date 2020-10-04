export function row(content, style = '') {
    return `<div class="row" style="${style}">${content}</div>`
}

export function col(content, style = '') {
    return `<div class="col-sm" style=${style}>${content}</div>`
}

export function css(styles = {}) {
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}
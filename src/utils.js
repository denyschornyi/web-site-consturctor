export function row(content, style = '') {
    return `<div class="row" style="${style}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
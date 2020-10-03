function title(block){
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `;
}

function text(block){
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>  
    `
}


function column(block){
    let html = block.value.map(el => `<div class="col-sm">${el}</div>`);
    return `
        <div class="row">
            ${html.join('')}
        </div>
    `;
}

function img(block){
    return `
        <div class="row">
            <img src="${block.value}" alt="img" />
        </div>
    `;
}


export const templates = {title, text, column, img};
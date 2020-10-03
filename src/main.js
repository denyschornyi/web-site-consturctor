const model = [
    {type: 'title', value: 'Hello from JS world'},
    {type: 'text', value: 'Here we go with some text'},
    {type: 'column', value: [
        '11111111',
        '22222222',
        '33333333'
    ]},
    {type: 'img', value: '../src/assets/img.png'}
];

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
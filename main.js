const model = [
    {type: 'title', value: 'Hello from JS world'},
    {type: 'text', value: 'Here we go with some text'},
    {type: 'column', value: [
        '11111111',
        '22222222',
        '33333333'
    ]}
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
    return `
        <div class="row">
            <div class="col-sm">
                ${block.value[0]}
            </div>

            <div class="col-sm">
                ${block.value[1]}
            </div>

            <div class="col-sm">
                ${block.value[2]}
            </div>
        </div>
    `;
}
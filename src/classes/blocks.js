class Block{
    constructor(type, value, options){
        this.type = type;
        this.value = value;
        this.options = options;
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super('title', value, options);
    }
}

export class ImgBlock extends Block{
    constructor(value, options){
        super('img', value, options);
    }
}

export class TextBlock extends Block{
    constructor(value, options){
        super('text', value, options);
    }
}

export class ColumnBlock extends Block{
    constructor(value, options){
        super('column', value, options);
    }
}
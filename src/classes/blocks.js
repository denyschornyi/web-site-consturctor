import {row, css, col} from '../utils'


class Block{
    constructor(type, value, options){
        this.type = type;
        this.value = value;
        this.options = options;
    }
    toHTML(){
        throw new Error('Method toHtml should be realized');
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super('title', value, options);
    }
    toHTML(){
        const{tag='h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class ImgBlock extends Block{
    constructor(value, options){
        super('img', value, options);
    }

    toHTML(){
        const{tag='h1', styles} = this.options;
        return row(`<${tag} src="${this.value}" alt="img" />`, css(styles));
    }
}

export class TextBlock extends Block{
    constructor(value, options){
        super('text', value, options);
    }
    toHTML(){
        const {tag = 'p', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class ColumnBlock extends Block{
    constructor(value, options){
        super('column', value, options);
    }
    toHTML(){
        const { styles } = this.options;
        let html = this.value.map(col).join('');
        return row(html, css(styles));
    }
}
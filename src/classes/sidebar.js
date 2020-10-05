import {block} from '../utils'
import { TitleBlock, TextBlock } from './blocks';
export class Sidebar{
    constructor(selector){
        this.$el = document.querySelector(selector);
        this.init();
    }

    init(){
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.add);
    }

    get template(){
        return [block("text"), block('title')].join('');
    }

    add(event){
        event.preventDefault();

        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        let newBlock = type === 'title' 
            ? new TitleBlock(value, {styles})
            : new TextBlock(value, {styles});

        console.log(newBlock);
    }
}

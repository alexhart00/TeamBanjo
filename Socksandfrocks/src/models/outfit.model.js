import { Bottom } from "./bottom.model";
import { Top } from "./top.model";

export class Outfit{
    
    // id : string
    // top : Top 
    // bottom : Bottom
    // color : string
    // style : string []
    // dressCode : string []

    constructor(id, top, bottom, color, style, dressCode){
        this.id = id != null ? id : '';
        this.top = top != null ? top : new Top();
        this.bottom = bottom != null ? bottom : new Bottom();
        this.color = color != null ? color : '';
        this.style = style != null ? style : [''];
        this.dressCode = dressCode != null ? dressCode : [''];
    }
}
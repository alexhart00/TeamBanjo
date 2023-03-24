import { Bottom } from "./bottom.model";
import { Top } from "./top.model";

export class Outfit{
    
    // id : string
    // top : Top 
    // bottom : Bottom
    // color : string
    // style : string []
    // dressCode : string []

    constructor(id, top, bottom, photoUrl, color, style, pattern, dressCode, percentMatch, percentCasual, percentCute,
        percentDressy, percentProf, percentCool, percentClassic){
        this.id = id != null ? id : '';
        this.top = top != null ? top : new Top();
        this.bottom = bottom != null ? bottom : new Bottom();
        this.photoUrl = photoUrl != null ? photoUrl: '';
        this.color = color != null ? color : '';
        this.style = style != null ? style : [''];
        this.pattern = pattern != null ? pattern : [''];
        this.dressCode = dressCode != null ? dressCode : [''];
        this.percentMatch = percentMatch != null ? percentMatch : '';
        this.percentCasual = percentCasual != null ? percentCasual : '';
        this.percentCute = percentCute != null ? percentCute : '';
        this.percentDressy = percentDressy != null ? percentDressy : '';
        this.percentProf = percentProf != null ? percentProf : '';
        this.percentCool = percentCool != null ? percentCool : '';
        this.percentClassic = percentClassic != null ? percentClassic : '';
    }
}
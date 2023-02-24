
export class Bottom{
    
    // id : string
    // itemName : string
    // type : string 
    // color : string
    // pattern : string
    // style : string []
    // dressCode : string []

    constructor(id, itemName, type, color, pattern, style, dressCode){
        this.id = id != null ? id : '';
        this.itemName = itemName != null ? itemName: '';
        this.type = type != null ? type : '';
        this.color = color != null ? color : '';
        this.pattern = pattern !=  null ? pattern : '';
        this.style = style != null ? style : [''];
        this.dressCode = dressCode != null ? dressCode : [''];
    }
}
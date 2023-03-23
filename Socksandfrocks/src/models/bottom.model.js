
export class Bottom{
    
    // id : string
    // itemName : string
    // type : string 
    // color : string
    // pattern : string
    // style : string []
    // dressCode : string []

    constructor(id, itemName, photoUrl, type, color, pattern, style, dressCode, listing){
        this.id = id != null ? id : '';
        this.itemName = itemName != null ? itemName: '';
        this.photoUrl = photoUrl != null ? photoUrl: '';
        this.type = type != null ? type : '';
        this.color = color != null ? color : '';
        this.pattern = pattern !=  null ? pattern : '';
        this.style = style != null ? style : [''];
        this.dressCode = dressCode != null ? dressCode : [''];
        this.listing = listing != null ? listing : '';
    }
}
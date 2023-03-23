export class Top{
    
    // id : string
    // itemName : string
    //sleeveLength : string
    // color : string
    // pattern : string
    // style : string []
    // dressCode : string []

    constructor(id, itemName, photoUrl, sleeveLength, color, pattern, style, dressCode, listing){
        this.id = id != null ? id : '';
        this.itemName = itemName != null ? itemName: '';
        this.photoUrl = photoUrl != null ? photoUrl: '';
        this.sleeveLength = sleeveLength != null ? sleeveLength : '';
        this.color = color != null ? color : '';
        this.pattern = pattern !=  null ? pattern : '';
        this.style = style != null ? style : [''];
        this.dressCode = dressCode != null ? dressCode : [''];
        this.listing = listing != null ? listing : [''];
    }
}
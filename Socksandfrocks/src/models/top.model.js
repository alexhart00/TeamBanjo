export class Top{
    
    // id : string
    // itemName : string
    //sleeveLength : string
    // color : string
    // pattern : string
    // style : string []
    // dressCode : string []

    constructor(id, itemName, sleeveLength, color, pattern, style, dressCode){
        this.id = id != null ? id : '';
        this.itemName = itemName != null ? itemName: '';
        this.sleeveLength = sleeveLength != null ? sleeveLength : '';
        this.color = color != null ? color : '';
        this.pattern = pattern !=  null ? pattern : '';
        this.style = style != null ? style : [''];
        this.dressCode = dressCode != null ? dressCode : [''];
    }
}
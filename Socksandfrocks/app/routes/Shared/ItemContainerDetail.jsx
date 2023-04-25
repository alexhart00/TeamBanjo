import products from "../../../public/assets/database/products.json"  

export default function ItemContainerDetail({item}) {
    return(
      <div class="centerDiv">
            <div><p>&nbsp;</p></div>
            <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg min-w-64">
                        <img src={item.photoUrl} class="w-48 h-48  center" alt="Item-photo"/>
                        <a target="_blank" class="center" href={item.listing}><button type="button" class= "SFbutton"><span style={{ fontWeight: 'bold' }}>View Product</span></button></a>
            </div>            
      </div>
    );
  }


  //{products.map((item, i) => <li key={i}>{item.id} - {item.style}</li>)}
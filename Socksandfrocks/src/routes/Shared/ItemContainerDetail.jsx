import products from "../../assets/database/products.json"

export default function ItemContainerDetail({item}) {
    return(
      <div class="centerDiv">
            <div><p>&nbsp;</p></div>
            <div class="p-1 h-2/12 w-8/12 bg-gray-100 border-gray-200 border-8 mx-auto shadow-lg">
                  <div class="container flex justify-between ">
                        <div class="conntainer flex items-center ml-12 ">
                              {/* No property for image */}
                              <img src={item.photoUrl} class="w-32 h-32" alt="Item-photo"/>
                        </div>
                        <div>
                              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-row space-x-8 md:flex-row md:space-x-8 md:mt-0 md:bg-gray-100 pt-10">
                                    <li>
                                          <ul>
                                                <li>Item:</li>
                                                <li class="p-1 bg-white">{item.itemName}</li>
                                          </ul>
                                    </li>
                                    <li class="flex">
                                          <a href={item.listing}><button type="button" class= "SFbutton"><span style={{ fontWeight: 'bold' }}>View Product</span></button></a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>            
      </div>
    );
  }


  //{products.map((item, i) => <li key={i}>{item.id} - {item.style}</li>)}
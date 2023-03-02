import products from "../../assets/database/products.json"

export default function ItemContainerDetail({item}) {
    return(
      <div class="centerDiv"> {/*WHY WON"T IT CENTER :(*/}
            <div><p>&nbsp;</p></div>
            <div class="p-1 h-2/12 w-11/12 bg-gray-100 border-gray-200 border-8 mx-auto">
                  <div class="container flex justify-between mx-auto">
                        <div class="conntainer flex items-center ml-16 ">
                              {/* No property for image */}
                              <img src="" alt="Item-photo"/>
                        </div>
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-row space-x-8 md:flex-row md:space-x-8 md:mt-0 md:bg-gray-100">
                              <li>
                                    <ul>
                                          <li>Name</li>
                                          <li class="p-1 bg-white">{item.itemName}</li>
                                    </ul>
                              </li>
                              <li>
                                    <ul>
                                    {/* No property for price */}
                                          <li>Price</li>
                                          <li class="p-1 bg-white">$placeholder</li>
                              </ul>
                              </li>
                              <li>
                                    <ul>
                                          <li>Sizes:</li>
                                          <li>
                                                <label for="Sizes"></label>
                                                <select class="h-1/12 p-1">
                                                      <option value="Small">Small</option>
                                                      <option value="Medium">Medium</option>
                                                      <option value="Large">Large</option>
                                                </select>
                                          </li>
                                    </ul>
                              </li>
                              <li class="flex">
                                    {/*placeholder button see https://help.shopify.com/en/manual/online-sales-channels/buy-button/add-embed-code */}
                                    <button type="button" class= "p-1 rounded-full bg-yellow-400 " onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Add to Cart!</span></button>
                              </li>
                        </ul>
                  </div>
            </div>            
      </div>
    );
  }


  //{products.map((item, i) => <li key={i}>{item.id} - {item.style}</li>)}
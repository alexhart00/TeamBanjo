import products from "../../assets/database/products.json"

export default function RandomPageRigout() {
    return(
      <div class="flex flex-wrap w-6/12 items-center p-8 ml-64 bg-gray-100 border-gray-200 border-8">
          <div class="flex flex-wrap justify-between mx-auto">
            <div class="mr-32 ml-2">
                <img class="rounded-lg object-center" src="https://i.pinimg.com/236x/a8/89/87/a8898773b09b63b9b334c1469f26592c.jpg" alt="Item-photo"/>
            </div>
            <div class="flex flex-wrap content-center max-h-sm text-center font-bold content-center">
            <ul class="p-2 border-gray-200 border-8 ">
                  <li>
                    <p>Choice your percentage match!</p>
                    <label for="matchpercent"> (0-100):</label>
                    <input type="number" id="matchpercent" name="matchpercent" min="0" max="100"></input>
                    <div><p>&nbsp;</p></div>
                    {/*Don't know how to sent input matchpercent to another react component we will need to revisit this*/}
                  </li>
                  <li>
                        <a href="/random" class="p-3 bg-yellow-400 m-auto">Randomize My Outfit</a>
                  </li>
                  <div><p>&nbsp;</p></div>
                </ul>
            </div>
          </div>
      </div>
    );
  }

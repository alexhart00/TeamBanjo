import products from "../../assets/database/products.json"

export default function RandomPageRigout(item) {
  const percentagematch = 98;
  const percentagematchline1 = 98;
  const percentagematchline2 = 76;
  const percentagematchline3 = 68;
  const percentagetagline1 = "Rebellious";
  const percentagetagline2 = "Dramatic";
  const percentagetagline3 = "Creative";

    return(
          <div class="conntainer flex p-8 ml-96 mr-96 grid grid-cols-2 bg-gray-100 border-gray-200 border-8 ">
            <div class="mr-2">
                <img class="w-5/12 rounded-lg" src="https://th.bing.com/th/id/R.143ffba217fc81397f5230aff48ca48e?rik=PQ55fFv7BYHY9w&riu=http%3a%2f%2fstylesweekly.com%2fwp-content%2fuploads%2f2016%2f12%2fOutfit-Ideas-for-Women_2017_20.jpg&ehk=9W6sZuHe6ivB0gUN0R3N5HZ4a7CUoICVyDvDIVRJBV4%3d&risl=&pid=ImgRaw&r=0" alt="Item-photo"/>
            </div>
            <div class="bg-gray-100 border-gray-200 border-8 justify-items-center font-bold">
              <ul>
                <li><h2>{percentagematch}% Match!</h2></li>
              </ul>
              <ul>
                <li>{percentagematchline1}% {percentagetagline1}</li>
              </ul>
              <ul>
                <li>{percentagematchline2}% {percentagetagline2}</li>
              </ul>
              <ul>
                <li>{percentagematchline3}% {percentagetagline3}</li>
              </ul>
              <ul>
              <label for="matchpercent">Choice your percentage match! (0-100):</label>
              <input type="number" id="matchpercent" name="matchpercent" min="0" max="100"></input>
              </ul>
              <li class="flex">
                              {/*placeholder button see https://help.shopify.com/en/manual/online-sales-channels/buy-button/add-embed-code */}
                                    <button type="button" class= "p-1 rounded-full bg-yellow-400 " onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Add to Cart!</span></button>
                        </li>
            </div>
          </div>
    );
  }

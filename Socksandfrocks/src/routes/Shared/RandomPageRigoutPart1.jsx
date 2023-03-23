import products from "../../assets/database/products.json"
import RandomImage from '../../assets/pictures/RandomPickout.png'

export default function RandomPageRigoutPart1({flag, percentageMatch, setPercentageMatch}) {

    return(
      <div class="flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
          <div class="flex flex-wrap justify-between mx-auto">
            <div class="mr-32 ml-2">
                <img class="rounded-lg object-center w-96" img src={RandomImage} alt="Item-photo"/>
            </div>
            <div class="flex flex-wrap content-center max-h-sm text-center font-bold content-center">
            <ul class="p-2 border-gray-200 border-8 shadow-lg">
                  <li>
                    <p>Choice your percentage match!</p>
                    <label for="percentageMatch"> (0-100):</label>
                    <input value={percentageMatch} name="percentageMatch" onChange={e => setPercentageMatch(e.target.value)} type="number" min="0" max="100"></input>
                    <div><p>&nbsp;</p></div>
                  </li>
                  <li>
                    <button class="SFbutton"  onClick={() => {flag(true)}}>Randomize My Outfit</button>
                  </li>
                  <div><p>&nbsp;</p></div>
                </ul>
            </div>
          </div>
      </div>
    );
  }

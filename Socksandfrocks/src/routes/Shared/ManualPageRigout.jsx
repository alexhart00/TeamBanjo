import products from "../../assets/database/products.json"
import { Bottom } from "../../models/bottom.model";
import { Outfit } from "../../models/outfit.model";
import { Top } from "../../models/top.model";
import ItemCarousel from "./Carousel.client";

export default function ManualPageRigout({URlTop, URlBottom, topArray, bottomArray, outfitArray}) {

  var outfitArray = outfitArray;

  //Will replace first parameter of both with selected url from carousel
  //Bottom getBottom currently using dummy urls in JSON
  var selectedTop = getTop(topArray[0].photoUrl, topArray);
  var selectedBottom = getBottom(bottomArray[0].photoUrl, bottomArray);

  //next step would be displaying all outfit properties 
  var selectedOutfit = findOutfit(selectedTop, selectedBottom, outfitArray);

  const percentageMatch = 90;

    return(
      <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
            <div class="mr-32 ml-32">
                <ItemCarousel imgUrls={URlTop}/>
            </div>
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                    <li>This outfit, has a</li>
                    <li>a {percentageMatch}% Match</li>
                </div>
                <div class="border-gray-200 border-8 content-center">
<<<<<<< HEAD
                    <img class="rounded-lg object-center max-h-52 m-auto" src={selectedOutfit.url} alt="Item-photo"/>
=======
                    <img class="rounded-lg object-center max-h-52 m-auto" src={selectedOutfit.photoUrl} alt="Item-photo"/>
                </div>
                <div class="border-gray-200 border-8">
                    <li>
                  <label for="Style">Style:</label>
                    <select name="Style" id="Style">
                    <option value=""></option>
                    <option value="Professional">Professional</option>
                      <option value="Casual">Casual</option>
                      <option value="Cute">Cute</option>
                      <option value="Classic">Classic</option>
                      <option value="Cute">Goth</option>
                      <option value="Classic">Punk</option>
                      <option value="Cute">Cool</option>
                      <option value="Classic">Dressy</option>
                    </select>
                </li>
                <li>
                  <label for="Pattern">Pattern:</label>
                    <select name="Pattern" id="Pattern">   
                    <option value=""></option>             
                      <option value="volvo">Solid</option>
                      <option value="saab">Plaid</option>
                      <option value="mercedes">Polka dot</option>
                      <option value="audi">Floral</option>
                      <option value="audi">Other</option>
                    </select>
                </li>
                <li>
                  <label for="Dress Code">Dress Code:</label>
                    <select name="Dress Code" id="Dress Code">
                    <option value=""></option>
                      <option value="volvo">Casual</option>
                      <option value="volvo">Dressy</option>
                      <option value="saab">Business Casual</option>
                      <option value="mercedes">Business Professional</option>
                      <option value="audi">Black Tie/Cocktail</option>
                    </select>
                </li>
>>>>>>> 23bfeca7f3557ce88eeae938d62b3b89312ed902
                </div>
                <div class="border-gray-200 border-8">
                <button type="button" class= "m-4 p-5 rounded-full bg-yellow-400 m-auto " onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Pick Out</span></button>
                </div>
              </ul>
          </div>
          <div class="mr-32 ml-32">
                <ItemCarousel imgUrls={URlBottom}/>
            </div>
      </div>
    );
  }


  function findOutfit(top, bottom, outfits){

    var outfitFound = new Outfit(); 

    var topString = JSON.stringify(top);
    var bottomString = JSON.stringify(bottom);  

    for(let o=0; o < outfits.length; o++){

      var outfitTopString = JSON.stringify(outfits[o].top);
      var outfitBottomString = JSON.stringify(outfits[o].bottom);

      console.log(outfitTopString == topString);

      if((outfitTopString == topString && outfitBottomString == bottomString)){
        outfitFound = outfits[o];
      }
    }

    return outfitFound;

  }

  function getTop(topUrl, array){

    var selectedTop = new Top();

    for(let i = 0; i < array.length; i++){
      if(array[i].photoUrl == topUrl){
        selectedTop = array[i];
      }
    }

    return selectedTop;

  }

  function getBottom(bottomUrl, array){

    var selectedBottom = new Bottom();

    for(let i = 0; i < array.length; i++){
      if(array[i].photoUrl == bottomUrl){
        selectedBottom = array[i];
      }
    }

    return selectedBottom;

  }
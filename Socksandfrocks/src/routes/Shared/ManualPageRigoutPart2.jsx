import products from "../../assets/database/products.json"
import { Bottom } from "../../models/bottom.model";
import { Outfit } from "../../models/outfit.model";
import { Top } from "../../models/top.model";
import ItemContainerDetail from "./ItemContainerDetail";
import NoMatchPercentagePage from "./NoMatchPercentagePage";

export default function ManualPageRigout({URlTop, URlBottom, topArray, bottomArray, outfitArray, flag, topPosition, bottomPosition}) {

  var outfitArray = outfitArray;
  if(topPosition > 5 || topPosition < 0){
    topPosition = 1
  }
  if(bottomPosition > 5 || bottomPosition < 0){
    bottomPosition = 1
  }
  //Will replace first parameter of both with selected url from carousel
  //Bottom getBottom currently using dummy urls in JSON
  var selectedTop = getTop(topArray[topPosition].photoUrl, topArray);
  var selectedBottom = getBottom(bottomArray[bottomPosition].photoUrl, bottomArray);
  var totalMatchPercentage = 100; // Change once totalMatchPercentage is figured out

  //next step would be displaying all outfit properties 
  var selectedOutfit = findOutfit(selectedTop, selectedBottom, outfitArray);

  const percentageMatch = 90;

  if(totalMatchPercentage != 0) {
    return(
      <div>
         <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
            <div class="mr-32 ml-32">
              <img src={selectedTop.photoUrl} class="w-48 h-48  center" alt="Item-photo"/>
            </div>
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                    <li>This outfit, has a</li>
                    <li>a {percentageMatch}% Match</li>
                </div>
                <div class="border-gray-200 border-8 content-center">
                    <img class="rounded-lg object-center max-h-52 m-auto" src={selectedOutfit.photoUrl} alt="Item-photo"/>
                </div>
                <div class="border-gray-200 border-8">
                <button type="button" class="SFbutton" onClick={() => {flag(false)}}><span style={{ fontWeight: 'bold' }}>Go back</span></button>
                </div>
              </ul>
          </div>
          <div class="mr-32 ml-32">
              <img src={selectedBottom.photoUrl} class="w-48 h-48  center" alt="Item-photo"/>
            </div>
      </div>
      <ItemContainerDetail item={selectedTop}/>
      <ItemContainerDetail item={selectedBottom}/>
      </div>
    );
    }
    else
    {
      return(       
      <div><NoMatchPercentagePage flag={flag}/></div>
      );
    }
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
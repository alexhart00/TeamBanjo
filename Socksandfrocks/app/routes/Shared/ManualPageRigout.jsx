import products from "../../../public/assets/database/products.json"
import { Bottom } from "../../models/bottom.model";
import { Outfit } from "../../models/outfit.model";
import { Top } from "../../models/top.model";
import ItemCarousel from "./Carousel.client";

export default function ManualPageRigout({URlTop, URlBottom, topArray, bottomArray, outfitArray, flag, TopLeftPosition, TopRightPosition, BottomLeftPosition, BottomRightPosition, topLeftValue, topRightValue, bottomLeftValue, bottomRightValue}) {

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
                <ItemCarousel imgUrls={URlTop} updateLeftFlag={TopLeftPosition} leftFlagValue={topLeftValue} updateRightFlag={TopRightPosition} rightFlagValue={topRightValue}/>
            </div>
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
                <div class="border-gray-200 border-8">
                <button type="button" class= "SFbutton" onClick={() => {flag(true)}}><span style={{ fontWeight: 'bold' }}>Pick Out</span></button>
                </div>
          </div>
          <div class="mr-32 ml-32">
                <ItemCarousel imgUrls={URlBottom} updateLeftFlag={BottomLeftPosition} leftFlagValue={bottomLeftValue} updateRightFlag={BottomRightPosition}  rightFlagValue={bottomRightValue}/>
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
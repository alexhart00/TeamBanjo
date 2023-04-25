import { useSession } from "@shopify/hydrogen";

import NavBar from "./Shared/NavBar.client";

import products from "../../public/assets/database/products.json";
import tops from "../../public/assets/database/tops.json";
import bottoms from '../../public/assets/database/bottoms.json';
import outfits from '../../public/assets/database/outfits.json';

import { Bottom } from "../models/bottom.model";
import { Top } from "../models/top.model";
import { Outfit } from "../models/outfit.model";


export default function Home() {

  var userToken = getUserToken();
  //currently undefined
  console.log(userToken);

  var serializedData = getSerializedData();

  return(
    <div>
      <NavBar clothesData={serializedData}/>
    </div>
  );
}

function getSerializedData(){
  var bottomData = getBottoms(); 
  var topData = getTops();
  var outfitData = getOutfits();

  var serializedData = [JSON.stringify(bottomData), JSON.stringify(topData), JSON.stringify(outfitData)];

  return serializedData;
}

function getBottoms(){
  bottomArray = [];

  bottoms.map((product) => {
    var newBottom = new Bottom(product.id, product.itemName, 
      product.photoUrl, product.type, product.color,
       product.pattern, product.style, product.dressCode, product.listing);
    bottomArray.push(newBottom);
  });

  return bottomArray;
}

function getTops(){
  topArray = [];

  tops.map((product) => {
    var newTop = new Top(product.id, product.itemName,
       product.photoUrl, product.sleeveLength, product.color, 
       product.pattern, product.style,
        product.dressCode, product.listing);
    topArray.push(newTop);
  });
 
  return topArray;
}

function getOutfits(){
  outfitArray = [];

  outfits.map((outfit) =>{
    var newOutfit = new Outfit(outfit.id, getTopByID(outfit.top_id), getBottomByID(outfit.bottom_id), 
    outfit.photoUrl, outfit.color, outfit.style, outfit.pattern, outfit.dressCode, outfit.percentMatch, outfit.percentCasual,
    outfit.percentCute, outfit.percentDressy, outfit.percentProf, outfit.percentCool, outfit.percentClassic);
    
    outfitArray.push(newOutfit);
  });

  return outfitArray;
}

function getBottomByID(id){
  let item = bottomArray.find(item => 
    {
      return item.id === id
    }
    );
  return item;
}

function getTopByID(id){
  let item = topArray.find(item => 
    {
      return item.id === id
    }
    );
  return item;
}

function getUserToken(){
  const { accessToken } = useSession();
  return accessToken;
}
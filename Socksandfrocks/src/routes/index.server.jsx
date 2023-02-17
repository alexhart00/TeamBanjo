import { useSession } from "@shopify/hydrogen";

import NavBar from "./Shared/NavBar.server";

import products from "../assets/database/products.json";
import tops from "../assets/database/tops.json";
import bottoms from '../assets/database/bottoms.json';
import outfits from '../assets/database/outfits.json';

import { Bottom } from "../models/bottom.model";
import { Top } from "../models/top.model";
import { Outfit } from "../models/outfit.model";



export default function Home() {

  var userToken = getUserToken();

  //currently undefined
  console.log(userToken);

  loadData();

  return(
    <div>
      <NavBar/>
    </div>
  );
}

function loadData(){

  bottomArray = [];

  bottoms.map((product) => {
    newBottom = new Bottom(product.id, product.itemName, product.type, product.color, product.pattern, product.style, product.dressCode);
    bottomArray.push(newBottom);
  });

  topArray = [];

  tops.map((product) => {
    newTop = new Top(product.id, product.itemName, product.sleeveLength, product.color, product.pattern, product.style, product.dressCode);
    topArray.push(newTop);
  });

  outfitArray = [];

  outfits.map((outfit) =>{
    newOutfit = new Outfit(outfit.id, getTopByID(outfit.top_id), getBottomByID(outfit.bottom_id), outfit.color, outfit.style, outfit.dressCode);
    outfitArray.push(newOutfit);
  });

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
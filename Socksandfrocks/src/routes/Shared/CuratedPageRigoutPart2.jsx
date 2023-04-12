import products from "../../assets/database/products.json"
import ItemCarousel from '../Shared/Carousel.client';
import Carousel from '@somedaycode/react-carousel';
import styled from 'styled-components';
import ItemContainerDetail from "./ItemContainerDetail";

export default function CuratedPageRigout({flag,  URlOutfit, outfits, style, pattern, dressCode}) {

  var selectedStyle = JSON.stringify(style);
  selectedStyle = stripStyleString(selectedStyle);

  var selectedPattern = JSON.stringify(pattern);
  selectedPattern = stripPatternString(selectedPattern);

  var selectedDress = JSON.stringify(dressCode);
  selectedDress = stripDressString(selectedDress);

  var curatedOutfit = findOutfit(outfits, selectedStyle, selectedPattern, selectedDress);
  console.log(curatedOutfit);

  try{
    var styles = curatedOutfit.style;
    console.log(styles);
    var percentages = getPercentages(curatedOutfit, styles);
  }

  catch(e){
    location.reload();
    alert("There is no match for the criteria you have selected, press OK to return to home page");

  }


    return(
      <div>
      <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
        <div class="flex flex-wrap justify-between mx-auto">
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold bg-gray-100">
          <img src={curatedOutfit.photoUrl} alt="Item-photo"/>
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                <ul class="p-2 border-gray-200 border-8 shadow-lg">
                <li>Rigout Pickout has</li>
                <li>found an outfit with</li>
                <li>a {curatedOutfit.percentMatch}% Match</li>
                <div><p>&nbsp;</p></div>  
                <ul class="inline-block p-3">
                  {styles.map(s => (<li key={s.id}>{s}</li>))}
                </ul>
                <ul class="inline-block p-3">
                 {percentages.map(s => (<li key={s.id}>{s}%</li>))}
                </ul>
              </ul>
                  
                </div>
                <div class="border-gray-200 border-8">
                <button class="SFbutton"  onClick={() => {flag(false)} }>Go Back</button>
                </div>
              </ul>
          </div>
      </div>
      </div>
      <div>
      <ItemContainerDetail item={curatedOutfit.top}/>
      <ItemContainerDetail item={curatedOutfit.bottom}/>
      </div>
     
      </div>
    );
  }

  function stripStyleString(styleString){
  styleString = styleString.replaceAll("selectStyle", "");
  styleString = styleString.replaceAll("\"", "");
  styleString = styleString.replaceAll("{", "");
  styleString = styleString.replaceAll(":", "");
  styleString = styleString.replaceAll("}", "");
  styleString = styleString.replaceAll(" ", "");
  return styleString;
  }

  function stripPatternString(patternString){
    patternString = patternString.replaceAll("\"", "");
    return patternString;
  }

  function stripDressString(dressString){
    dressString = dressString.replaceAll("\"", "");
    return dressString;
  }

  function findOutfit(array, style, pattern, dressCode){
      var outfitFound = false;
      var acceptedOutfits = [];
  
        for(let i = 0; i < array.length; i++){
          if(array[i].style.includes(style) && array[i].pattern.includes(pattern) && array[i].dressCode.includes(dressCode)){
            acceptedOutfits.push(array[i]);
            outfitFound = true;
          }
        }
  
      if(!outfitFound){
        alert("There is no match for the criteria you have selected, press OK to return to home page");
        location.reload();
      }
  
      const randIndex = Math.floor(Math.random() * acceptedOutfits.length);
  
      const randomOutfit = acceptedOutfits[randIndex];
  
      return randomOutfit;
  }

  function getPercentages(outfit, stylesList){
    var percentList = [];
    if(stylesList.includes("Casual")){
      percentList.push(outfit.percentCasual);
    }
    if(stylesList.includes("Cute")){
      percentList.push(outfit.percentCute);
    }
    if(stylesList.includes("Dressy")){
      percentList.push(outfit.percentDressy);
    }
    if(stylesList.includes("Professional")){
      percentList.push(outfit.percentProf);
    }
    if(stylesList.includes("Cool")){
      percentList.push(outfit.percentCool);
    }
    if(stylesList.includes("Classic")){
      percentList.push(outfit.percentClassic);
    }

    return percentList;
  }
import products from "../../assets/database/products.json"
import ItemCarousel from '../Shared/Carousel.client';
import Carousel from '@somedaycode/react-carousel';
import styled from 'styled-components';

export default function CuratedPageRigout({flag, URlOutfit, outfits, style, pattern, dressCode}) {

  var selectedStyle = JSON.stringify(style);
  selectedStyle = stripStyleString(selectedStyle);

  var selectedPattern = JSON.stringify(pattern);
  selectedPattern = stripPatternString(selectedPattern);

  var selectedDress = JSON.stringify(dressCode);
  selectedDress = stripDressString(selectedDress);

  console.log("style: " + selectedStyle); 
  console.log("pattern: " + selectedPattern);
  console.log("drescode: " + selectedDress);

    return(
      <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
            <div class="mr-32 ml-32">
                
            </div>
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                    <li>This outfit, has a</li>
                    <li>a 100% Match</li>
                  
                </div>
                <div class="border-gray-200 border-8">
                <button class="SFbutton"  onClick={() => {flag(false)} }>Go Back</button>
                </div>
              </ul>
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
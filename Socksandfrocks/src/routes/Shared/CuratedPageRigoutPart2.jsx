import products from "../../assets/database/products.json"
import ItemCarousel from '../Shared/Carousel.client';
import Carousel from '@somedaycode/react-carousel';
import styled from 'styled-components';

export default function CuratedPageRigout({flag, URlOutfit}) {
  const percentageMatch = 90
  const percentagematchline1 = percentageMatch;
  const percentagematchline2 = percentageMatch-6;
  const percentagematchline3 = percentageMatch-13;
  const percentagetagline1 = "Rebellious";
  const percentagetagline2 = "Dramatic";
  const percentagetagline3 = "Creative";

    return(
      <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
            <div class="mr-32 ml-32">
                <ItemCarousel imgUrls={URlOutfit}/>
            </div>
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                    <li>This outfit, has a</li>
                    <li>a {percentageMatch}% Match</li>
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
                </div>
                <div class="border-gray-200 border-8">
                <button class="m-4 p-5 rounded-full bg-yellow-400 m-auto"  onClick={() => {flag(false)} }>Go Back</button>
                </div>
              </ul>
          </div>
      </div>
    );
  }

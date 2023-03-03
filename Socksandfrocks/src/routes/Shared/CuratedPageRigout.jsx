import products from "../../assets/database/products.json"
import ItemCarousel from '../Shared/Carousel.client';
import Carousel from '@somedaycode/react-carousel';
import styled from 'styled-components';

export default function CuratedPageRigout({URl}) {
  const percentageMatch = 90
  const percentagematchline1 = percentageMatch;
  const percentagematchline2 = percentageMatch-6;
  const percentagematchline3 = percentageMatch-13;
  const percentagetagline1 = "Rebellious";
  const percentagetagline2 = "Dramatic";
  const percentagetagline3 = "Creative";

    return(
      <div class="flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
          <div class="flex flex-wrap justify-between mx-auto">
            <div class="mr-32 ml-2">
                <ItemCarousel imgUrls={URl}/>
            </div>
            <div class="flex flex-wrap content-center max-h-sm text-center font-bold content-center bg-gray-100 shadow-lg">
              <ul class="p-2 border-gray-200 border-8 ">
                <li>This outfit has a</li>
                <li>a {percentageMatch}% Match</li>
                <div><p>&nbsp;</p></div>
                <li>{percentagematchline1}% {percentagetagline1}</li>
                <li>{percentagematchline2}% {percentagetagline2}</li>
                <li>{percentagematchline3}% {percentagetagline3}</li>
                <div><p>&nbsp;</p></div>
                <li>
                  <button type="button" class= "p-3 rounded-full bg-yellow-400 m-auto " onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Add Outfit to Cart!</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

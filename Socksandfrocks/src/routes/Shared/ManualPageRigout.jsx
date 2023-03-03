import products from "../../assets/database/products.json"
import ItemCarousel from "./Carousel.client";

export default function ManualPageRigout({URlTop, URlBottom, topArray, bottomArray}) {

  // dummy variables for selected tops and bottoms 
  //Will have to create algorithm to grab these objects based on current URL displayed in carousel
  selectedTop = topArray[0];
  selectedBottom = bottomArray[0];

  const percentageMatch = 90

    return(
      <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
            <div class="mr-32 ml-32">
                <ItemCarousel imgUrls={URlTop}/>
            </div>
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                    <li>This outfit has a</li>
                    <li>a {percentageMatch}% Match</li>
                </div>
                <div class="border-gray-200 border-8">
                    <div>{/*image placeholder*/}</div>
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

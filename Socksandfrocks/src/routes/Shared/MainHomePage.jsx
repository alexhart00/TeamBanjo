import Curated from '../../assets/pictures/Curated3232023.jpg';
import Manual from '../../assets/pictures/Manual3232023.jpg';
import Random from '../../assets/pictures/Random3232023.jpg';

export default function MainHomePage({}) {
    return(
      <div>
        <div class=" w-6/12 items-center p-8 centerDiv text-purple-900">
              <h1 class="mb-4 text-4xl">Welcome to SocksandFrocks.com</h1>
              <p> “all text is placeholder” Here are some exciting applications to make your shopping experience a blast.</p>
        </div>
        <div><p>&nbsp;</p></div>
        <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
              <h1 class="mb-4 text-4xl">Curated Rigout Pickout</h1>
              <p>&nbsp;</p>
              <p>The curated rig-out pick-out application allows the user to select from a curated selection of outfits that have been particularly picked out for their very strong synergies in terms of style colors and patterns, saving time from the often laborious task of picking out outfits.</p>
              <img class="rounded-lg object-center w-96 border-gray-200 border-8 center" img src={Curated} alt="Item-photo"/>
              <button type="button" class= "p-4 rounded-full bg-yellow-400 center" onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Try It Now!</span></button>
        </div>
        <div><p>&nbsp;</p></div>
        <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
              <p>&nbsp;</p>
              <h1 class="mb-4 text-4xl">Manual Rigout Pickout</h1>
              <img class="rounded-lg object-center w-96 border-gray-200 border-8 center" img src={Manual} alt="Item-photo"/>
              <p>The manual rig-out pick-out application allows the user to select tops and bottoms from the available selection of products to find an outfit that matches and shows the percentage match for style color, and pattern.</p>
              <p>&nbsp;</p>
              <button type="button" class= "p-4 rounded-full bg-yellow-400 center" onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Try It Now!</span></button>
        </div>
        <div><p>&nbsp;</p></div>
        <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
              <h1 class="mb-4 text-4xl">Random Rigout Pickout</h1>
              <p>&nbsp;</p>
              <p>The random rig-out pick-out application allows the user to set the minimum match percentage, that they desire, and the system will automatically find and display an outfit that meets the required match percentage criteria. </p>
              <img class="rounded-lg object-center w-96 border-gray-200 border-8 center" img src={Random} alt="Item-photo"/>
              <button type="button" class= "p-4 rounded-full bg-yellow-400 center" onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Try It Now!</span></button>
        </div>
        <div><p>&nbsp;</p></div>
      </div>
    );
  }


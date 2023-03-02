import products from "../../assets/database/products.json"

export default function RandomPageRigoutPart2({percentageMatch}) {
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
                <img class="rounded-lg object-center" src="https://i.pinimg.com/236x/a8/89/87/a8898773b09b63b9b334c1469f26592c.jpg" alt="Item-photo"/>
            </div>
            <div class="flex flex-wrap content-center max-h-sm text-center font-bold content-center bg-gray-100 ">
              <ul class="p-2 border-gray-200 border-8 shadow-lg">
                <li>Rigout Pickout has</li>
                <li>found an outfit with</li>
                <li>a {percentageMatch}% Match</li>
                <div><p>&nbsp;</p></div>
                <li>{percentagematchline1}% {percentagetagline1}</li>
                <li>{percentagematchline2}% {percentagetagline2}</li>
                <li>{percentagematchline3}% {percentagetagline3}</li>
                <div><p>&nbsp;</p></div>
                <li>
                  <button type="button" class= "p-3 rounded-full bg-yellow-400 m-auto " onclick="alert('You have added me to cart, Not Really')"><span style={{ fontWeight: 'bold' }}>Add to Cart!</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

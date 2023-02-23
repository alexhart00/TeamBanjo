import products from "../../assets/database/products.json"

export default function RandomPageRigout(item) {
  const percentagematch = 98;
  const percentagematchline1 = 98;
  const percentagematchline2 = 76;
  const percentagematchline3 = 68;
  const percentagetagline1 = "Rebellious";
  const percentagetagline2 = "Dramatic";
  const percentagetagline3 = "Creative";

    return(
      <div class="flex flex-wrap w-6/12 items-center p-8 ml-64 bg-gray-100 border-gray-200 border-8">
          <div class="flex flex-wrap justify-between mx-auto">
            <div class="mr-32 ml-2">
                <img class="rounded-lg object-center" src="https://i.pinimg.com/236x/a8/89/87/a8898773b09b63b9b334c1469f26592c.jpg" alt="Item-photo"/>
            </div>
            <div class="flex flex-wrap content-center max-h-sm text-center font-bold content-center bg-gray-100 ">
              <ul class="p-2 border-gray-200 border-8 ">
                <li><h2>Rigout Pickout</h2></li>
                <li><h2>has found an outfit</h2></li>
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

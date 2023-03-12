import products from "../../assets/database/products.json"

export default function RandomPageRigoutPart2({flag, selectedOutfit}) {

  var randOutfit = selectedOutfit;

  const percentagematchline1 = "";
  const percentagematchline2 = "";
  const percentagematchline3 = "";
  const percentagetagline1 = "Rebellious";
  const percentagetagline2 = "Dramatic";
  const percentagetagline3 = "Creative";

  const styles = randOutfit.style;

  const percentages = getPercentages(randOutfit, styles);
 

    return(
      <div class="flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
          <div class="flex flex-wrap justify-between mx-auto">
            <div class="mr-32 ml-2">
                <img class="rounded-lg object-center" src={randOutfit.photoUrl} alt="Item-photo"/>
            </div>
            <div class="flex flex-wrap content-center max-h-sm text-center font-bold content-center bg-gray-100 ">
              <ul class="p-2 border-gray-200 border-8 shadow-lg">
                <li>Rigout Pickout has</li>
                <li>found an outfit with</li>
                <li>a {randOutfit.percentMatch}% Match</li>
                <div><p>&nbsp;</p></div>  
                <ul class="inline-block p-3">
                  {styles.map(s => (<li key={s.id}>{s}</li>))}
                </ul>
                <ul class="inline-block p-3">
                 {percentages.map(s => (<li key={s.id}>{s}%</li>))}
                </ul>
                <div><p>&nbsp;</p></div>
                <li>
                  <button type="button" class="p-3 rounded-full bg-yellow-400 m-auto" onClick={() => {flag(false)}}>Go Back</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
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
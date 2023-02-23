import NavBar from "../Shared/NavBar.client";

export default function CuratedPage({clothingData, showComponent}){

    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    if(showComponent == true){
        return(
            <div>
                CuratedPage
            </div>
        );
    }

    else{
        return(
            <div></div>
        );
    }
  
}
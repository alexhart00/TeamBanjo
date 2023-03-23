import React, { useState } from "react";
import NavBar from "../Shared/NavBar.client";
import CuratedPageRigout from "../Shared/CuratedPageRigout";
import CuratedPageRigoutPart2 from "../Shared/CuratedPageRigoutPart2";
import ItemContainerDetail from "../Shared/ItemContainerDetail";

export default function CuratedPage({clothingData, showComponent}){


    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var outfitImages = getImages(outfitArray);
    var topImages = getImages(topArray);
    var bottomImages = getImages(bottomArray);
    var selectedItem = bottomArray[0];

    var [Part2Flag, setFlagVisible] = useState(false);

    if(showComponent == true && Part2Flag == false){
        return(
            <div>
                <CuratedPageRigout flag={setFlagVisible} URlOutfit={outfitImages}/>
            </div>
        );
    }
    if(showComponent == true && Part2Flag == true){
        return(
            <div>
                <CuratedPageRigoutPart2 flag={setFlagVisible} URlOutfit={outfitImages}/>
                <ItemContainerDetail item={selectedItem}/>
                <ItemContainerDetail item={selectedItem}/>
            </div>
        );
    }        
    else{
        return(
            <div></div>
        );
    }
  
}

function getImages(array){
    var imageArray = [];

    for(let i = 0; i < array.length; i++){
        imageArray.push(array[i].photoUrl);
    }

    return imageArray;
}
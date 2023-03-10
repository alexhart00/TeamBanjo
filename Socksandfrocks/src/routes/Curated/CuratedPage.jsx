import React, { useState } from "react";
import NavBar from "../Shared/NavBar.client";
import CuratedPageRigout from "../Shared/CuratedPageRigout";
import ItemContainerDetail from "../Shared/ItemContainerDetail";

export default function CuratedPage({clothingData, showComponent}){


    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var outfitImages = getImages(outfitArray);
    var topImages = getImages(topArray);
    var bottomImages = getImages(bottomArray);
    var selectedItem = bottomArray[0];

    if(showComponent == true){
        return(
            <div>
                CuratedPage
                <CuratedPageRigout URlOutfit={topImages}/>
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
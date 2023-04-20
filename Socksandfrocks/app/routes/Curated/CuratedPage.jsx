import React, { useState } from "react";
import NavBar from "../Shared/NavBar.client";
import CuratedPageRigout from "../Shared/CuratedPageRigout";
import CuratedPageRigoutPart2 from "../Shared/CuratedPageRigoutPart2";
import ItemContainerDetail from "../Shared/ItemContainerDetail";

export default function CuratedPage({clothingData, showComponent}){

    var outfitArray = JSON.parse(clothingData[2]);

    var outfitImages = getImages(outfitArray);
   

    var [Part2Flag, setFlagVisible] = useState(false);

    var [style, setStyle] = useState("");
    var [dressCode, setDressCode] = useState("");
    var [pattern, setPattern] = useState("");


    if(showComponent == true && Part2Flag == false){
        return(
            <div>
                <CuratedPageRigout 
                flag={setFlagVisible}
                URlOutfit={outfitImages}
                style={setStyle}
                pattern={setPattern}
                dressCode={setDressCode}/>
            </div>
        );
    }
    if(showComponent == true && Part2Flag == true){
        return(
            <div>
                <CuratedPageRigoutPart2 
                flag={setFlagVisible} 
                URlOutfit={outfitImages}
                outfits={outfitArray}
                style={style}
                pattern={pattern}
                dressCode={dressCode}/>
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
import NavBar from "../Shared/NavBar.client";
import ItemContainerDetail from "../Shared/ItemContainerDetail";
import RandomPageRigoutPart2 from "../Shared/RandomPageRigoutPart2";
import RandomPageRigoutPart1 from "../Shared/RandomPageRigoutPart1";
import React, { useState } from "react";
import { Outfit } from "../../models/outfit.model";

export default function RandomPage({clothingData, showComponent}){

    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var selectedItem = topArray[0];

    var [percentageMatch, setPercentageMatch] = useState('90');

    var [Part2Flag, setFlagVisible] = useState(false);
    
    if(showComponent == true && Part2Flag == false) {
        return(
            <div>
                RandomPagePart1
                <RandomPageRigoutPart1
                flag={setFlagVisible} 
                percentageMatch={percentageMatch} 
                setPercentageMatch={setPercentageMatch}
                tops={topArray}
                bottoms={bottomArray}
                outfits={outfitArray}/>
            </div>
        );
    }
    if(showComponent == true && Part2Flag == true){

        var randomIndex = getRandomInt(25);
        var selectedOutfit = outfitArray[randomIndex];

        return(
            <div>
            RandomPagePart2
            <RandomPageRigoutPart2
            flag={setFlagVisible} 
            percentageMatch={percentageMatch}
            selectedOutfit={selectedOutfit}
            tops={topArray}
            bottoms={bottomArray} />
            </div>
        );
    }     
    else{
        return(
            <div>
            </div>
        );
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
import NavBar from "../Shared/NavBar.client";
import ItemContainerDetail from "../Shared/ItemContainerDetail";
import RandomPageRigout from "../Shared/RandomPageRigout";
import RandomPageRigoutPart1 from "../Shared/RandomPageRigoutPart1";
import React, { useState } from "react";

export default function RandomPage({clothingData, showComponent}){
    const [randomNum, setRandomNum] = useState(5);
    
    const handleRandomNum = () => {
        setRandomNum(Math.random(25))
    };
    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var selectedItem = bottomArray[0];

    var [percentageMatch, setPercentageMatch] = useState('90');
    var [Part2Flag, setFlagVisible] = useState(false);
    
    if(showComponent == true && Part2Flag == false) {
        return(
            <div>
                RandomPagePart1
                <RandomPageRigoutPart1 flag={setFlagVisible} percentageMatch={setPercentageMatch}/>
            </div>
        );
    }
    if(showComponent == true && Part2Flag == true){
        return(
            <div>
            RandomPagePart2
            <RandomPageRigout percentageMatch={percentageMatch}/>
            <ItemContainerDetail item={selectedItem}/>
            <ItemContainerDetail item={selectedItem}/>
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
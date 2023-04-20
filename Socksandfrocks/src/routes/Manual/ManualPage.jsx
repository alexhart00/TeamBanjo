import React, { useState } from "react";
import ItemCarousel from "../Shared/Carousel.client";
import ManualPageRigout from "../Shared/ManualPageRigout";
import ManualPageRigoutPart2 from "../Shared/ManualPageRigoutPart2";
import ItemContainerDetail from "../Shared/ItemContainerDetail";


export default function ManualPage({clothingData, showComponent}){

    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var topImages = getImages(topArray);
    var bottomImages = getImages(bottomArray);

    var topSelectedItem = topArray[0];
    var bottomSelectedItem = bottomArray[0];

    var [Part2Flag, setFlagVisible] = useState(false);

    const [carouselTopPositionPart1, setCarouselTopPositionPart1] = useState(0);
    const [carouselTopPositionPart2, setCarouselTopPositionPart2] = useState(0);
    const [carouselBottomPositionPart1, setCarouselBottomPositionPart1] = useState(0);
    const [carouselBottomPositionPart2, setCarouselBottomPositionPart2] = useState(0);

    const handleTopCarouseChangePart1 = newPosition => {
        setCarouselTopPositionPart1(newPosition);
        setCarouselTopPositionPart2(newPosition);
    };

    const handleTopCarouseChangePart2 = newPosition => {
        setCarouselTopPositionPart1(newPosition);
        setCarouselTopPositionPart2(newPosition);
    };

    const handleBottomCarouseChangePart1 = newPosition => {
        setCarouselBottomPositionPart1(newPosition);
        setCarouselBottomPositionPart2(newPosition);
    };

    const handleBottomCarouseChangePart2 = newPosition => {
        setCarouselBottomPositionPart1(newPosition);
        setCarouselBottomPositionPart2(newPosition);
    };

    
    if(showComponent == true && Part2Flag == false){
        return(
            <div>
                 {/* <ItemCarousel imgUrls={topImages}/> */}
                 {/* <ItemCarousel imgUrls={bottomImages}/> */}
                 <ManualPageRigout 
                 URlTop={topImages}
                 URlBottom={bottomImages}
                 topArray={topArray}
                 bottomArray={bottomArray}
                 outfitArray={outfitArray}
                 flag = {setFlagVisible}
                 />
            </div>
            
        );
    }
    if(showComponent == true && Part2Flag == true){
        return(
            <div>
                 {/* <ItemCarousel imgUrls={topImages}/> */}
                 {/* <ItemCarousel imgUrls={bottomImages}/> */}
                 <ManualPageRigoutPart2 
                 URlTop={topImages}
                 URlBottom={bottomImages}
                 topArray={topArray}
                 bottomArray={bottomArray}
                 outfitArray={outfitArray}
                 flag = {setFlagVisible}
                 />
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
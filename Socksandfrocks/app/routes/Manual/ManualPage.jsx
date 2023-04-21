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
    var [carouselTopLeftPosition, setCarouselTopLeftPosition] = useState(0);
    var [carouselTopRightPosition, setCarouselTopRightPosition] = useState(0);
    var [carouselBottomLeftPosition, setCarouselBottomLeftPosition] = useState(0);
    var [carouselBottomRightPosition, setCarouselBottomRightPosition] = useState(0);

    
    if(showComponent == true && Part2Flag == false){
        return(
            <div>
                 <ManualPageRigout 
                 URlTop={topImages}
                 URlBottom={bottomImages}
                 topArray={topArray}
                 bottomArray={bottomArray}
                 outfitArray={outfitArray}
                 flag = {setFlagVisible}
                 TopLeftPosition = {setCarouselTopLeftPosition}
                 TopRightPosition ={setCarouselTopRightPosition}
                 BottomLeftPosition = {setCarouselBottomLeftPosition}
                 BottomRightPosition = {setCarouselBottomRightPosition}
                 topLeftValue = {carouselTopLeftPosition} 
                 topRightValue = {carouselTopRightPosition}
                 bottomLeftValue = {carouselBottomLeftPosition}
                 bottomRightValue = {carouselBottomRightPosition}
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
                 TopLeftPosition = {setCarouselTopLeftPosition}
                 TopRightPosition ={setCarouselTopRightPosition}
                 BottomLeftPosition = {setCarouselBottomLeftPosition}
                 BottomRightPosition = {setCarouselBottomRightPosition}
                 topLeftValue = {carouselTopLeftPosition} 
                 topRightValue = {carouselTopRightPosition}
                 bottomLeftValue = {carouselBottomLeftPosition}
                 bottomRightValue = {carouselBottomRightPosition}
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
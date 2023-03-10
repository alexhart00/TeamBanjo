import React, { useState } from "react";
import ItemCarousel from "../Shared/Carousel.client";
import ManualPageRigout from "../Shared/ManualPageRigout";
import ItemContainerDetail from "../Shared/ItemContainerDetail";


export default function ManualPage({clothingData, showComponent}){

    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var topImages = getImages(topArray);
    var bottomImages = getImages(bottomArray);

    var selectedItem = bottomArray[0];
    var [Part2Flag, setFlagVisible] = useState(false);

    
    if(showComponent == true && Part2Flag == false){
        return(
            <div>
                 <p>Manual Page</p>
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
            <p>Manual Page</p>
                 {/* <ItemCarousel imgUrls={topImages}/> */}
                 {/* <ItemCarousel imgUrls={bottomImages}/> */}
                 <ManualPageRigout 
                 URlTop={topImages}
                 URlBottom={bottomImages}
                 topArray={topArray}
                 bottomArray={bottomArray}
                 outfitArray={outfitArray}
                 />
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
import React, { useState } from "react";
import MainHomePage from "../Shared/MainHomePage";

export default function HomePage({showComponent, setisHomeVisible, setIsCuratedVisible, setIsManualVisible, setIsRandomVisible}){

    if(showComponent == true){
        return(
            <div>
                <MainHomePage setisHomeVisible={setisHomeVisible} setIsCuratedVisible={setIsCuratedVisible} setIsManualVisible={setIsManualVisible} setIsRandomVisible={setIsRandomVisible}/>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
  
}

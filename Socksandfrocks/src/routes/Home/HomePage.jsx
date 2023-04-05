import React, { useState } from "react";
import MainHomePage from "../Shared/MainHomePage";
import FZFPage from "../Shared/FZFPage";

export default function HomePage({showComponent, setisHomeVisible, setIsCuratedVisible, setIsManualVisible, setIsRandomVisible}){

    if(showComponent == true){
        return(
            <div>
                <MainHomePage setisHomeVisible={setisHomeVisible} setIsCuratedVisible={setIsCuratedVisible} setIsManualVisible={setIsManualVisible} setIsRandomVisible={setIsRandomVisible}/>
                <FZFPage setisHomeVisible={setisHomeVisible} setIsCuratedVisible={setIsCuratedVisible} setIsManualVisible={setIsManualVisible} setIsRandomVisible={setIsRandomVisible}/>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
  
}

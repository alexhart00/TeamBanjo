import React, { useState } from "react";
import MainHomePage from "../Shared/MainHomePage";
import FZFPage from "../Shared/FZFPage";
import NoMatchPercentagePage from "../Shared/NoMatchPercentagePage";

export default function HomePage({showComponent, setisHomeVisible, setIsCuratedVisible, setIsManualVisible, setIsRandomVisible}){

    //Delete Flag and FZFPage and NoMatchPercentagePage, the ones on this page are just for testing, implement on Thursday.
    var [Part2Flag, setFlagVisible] = useState(true);

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

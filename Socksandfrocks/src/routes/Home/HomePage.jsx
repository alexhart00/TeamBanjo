import React, { useState } from "react";
import MainHomePage from "../Shared/MainHomePage";

export default function HomePage({showComponent}){

    if(showComponent == true){
        return(
            <div>
                <MainHomePage/>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
  
}

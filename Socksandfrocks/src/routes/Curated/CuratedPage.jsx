import NavBar from "../Shared/NavBar.client";

export default function CuratedPage({clothingData, showComponent}){

    if(showComponent == true){
        return(
            <div>
                CuratedPage
            </div>
        );
    }

    else{
        return(
            <div></div>
        );
    }
  
}
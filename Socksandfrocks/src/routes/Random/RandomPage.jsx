import NavBar from "../Shared/NavBar.client";
import ItemDetails from "../Shared/ItemDetails";
import ItemContainerDetail from "../Shared/ItemContainerDetail";
import RandomPageRigout from "../Shared/RandomPageRigout";


export default function RandomPage({clothingData, showComponent}){

    if(showComponent == true) {
        return(
            <div>
                RandomPage
                <RandomPageRigout/>
                feio
                <ItemContainerDetail/>
            </div>
        );
    }

    else{
        return(
            <div></div>
        )
    }


}
import NavBar from "../Shared/NavBar.client";
import ItemDetails from "../Shared/ItemDetails";
import ItemContainerDetail from "../Shared/ItemContainerDetail";
import RandomPageRigout from "../Shared/RandomPageRigout";


export default function RandomPage({clothingData, showComponent}){

    var bottomArray = JSON.parse(clothingData[0]);
    var topArray = JSON.parse(clothingData[1]);
    var outfitArray = JSON.parse(clothingData[2]);

    var selectedItem = bottomArray[0];

    if(showComponent == true) {
        return(
            <div>
                RandomPage
    
                {/* To add data into this component, make sure you use serialized "clothingData" */}
                <RandomPageRigout/>
                feio
                <ItemContainerDetail item={selectedItem}/>
            </div>
        );
    }

    else{
        return(
            <div></div>
        )
    }

}
import NavBar from "../Shared/NavBar.server";
import ItemDetails from "../Shared/ItemDetails.server";
import ItemContainerDetail from "../Shared/ItemContainerDetail";
import RandomPageRigout from "../Shared/RandomPageRigout";


export default function RandomPage(){
    return(
        <div>
            <NavBar/>
            <RandomPageRigout/>
            <ItemContainerDetail/>
            <ItemContainerDetail/>
        </div>
    );
}
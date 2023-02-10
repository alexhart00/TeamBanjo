import NavBar from "../Shared/NavBar.server";
import ItemDetails from "../Shared/ItemDetails.server";
import ItemContainerDetail from "../Shared/ItemContainerDetail";

export default function RandomPage(){
    return(
        <div>
            <NavBar/>
            RandomPage
            <ItemContainerDetail/>
        </div>
    );
}

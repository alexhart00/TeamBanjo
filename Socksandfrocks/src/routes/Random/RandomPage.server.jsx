import NavBar from "../Shared/NavBar.server";
import ItemDetails from "../Shared/ItemDetails.server";
import ItemContainerDetail from "../Shared/ItemContainerDetail";
import RandomRigoutPickoutWindow from "../Shared/RandomRigoutPickoutWindow";

export default function RandomPage(){
    return(
        <div>
            <NavBar/>
            RandomPage
            <ItemContainerDetail/>
        </div>
    );
}
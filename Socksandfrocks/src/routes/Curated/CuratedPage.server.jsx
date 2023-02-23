import NavBar from "../Shared/NavBar.server";
import CuratedPageRigoutPickout from "../Shared/CuratedPageRigoutPickout";

export default function CuratedPage(){
    return(
        <div>
            <NavBar/>
            <CuratedPageRigoutPickout/>
        </div>
    );
}
import { useSession } from "@shopify/hydrogen";

import FZFPage from "./Shared/FZFPage";


export default function NotFoundPage() {

  var userToken = getUserToken();
  //currently undefined
  console.log(userToken);


  return(
    <div>
      <FZFPage/>
    </div>
  );
}

function getUserToken(){
  const { accessToken } = useSession();
  return accessToken;
}
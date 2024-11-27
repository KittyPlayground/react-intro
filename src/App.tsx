import './App.css'
import Dashboard from "./component/Dashboard.tsx";
import Login from "./component/Login.tsx";

import {ReactElement} from "react";

function App() {

    const isLoggedIn : boolean = true;
    let content :ReactElement;

    if(isLoggedIn){
        content = <Dashboard/>
    }else {
        content =<Login/>
    }


    return (
       <div>
           {isLoggedIn?<Dashboard/>:<Login/>}
           {content}
       </div>
    )
}


export default App

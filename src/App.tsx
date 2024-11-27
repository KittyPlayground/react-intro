import './App.css'
import ButtonComponent from "./component/ButtonComponent.tsx";
import {useState} from "react";


function App() {
    const [content,setContent] = useState("Default content");
    function handleClick(type : string) {
        console.log('click')
        //alert((type + ' clicked'))
        setContent(type)
    }

    return (
        <>
            <ButtonComponent name ="Dashboard" onClick = {handleClick}></ButtonComponent>
            <ButtonComponent name ="Add customer" onClick = {handleClick}></ButtonComponent>
            <ButtonComponent name ="Delete customer" onClick = {handleClick}></ButtonComponent>
            <br></br>
            {content}
        </>
    )
}
export default App

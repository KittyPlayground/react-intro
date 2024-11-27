import React from "react";

export default function Test(props:{name:string,children:React.ReactNode}){
    return(
        <>
            <h1>{props.name}</h1>
            <p>{props.children}</p>
        </>
    )
}
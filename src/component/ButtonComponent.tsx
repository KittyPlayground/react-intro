import  React from "react";

export default  function ButtonComponent (props:{children:React.ReactNode}){

    return (
    <>
        <button>{props.children}</button>
    </>
    )
}
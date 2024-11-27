
export default  function ButtonComponent (prop){
 const name = prop.name;

 return (
    <>
        <button onClick={()=>prop.onClick(name)}>{name}</button>&nbsp;
    </>
    )
}
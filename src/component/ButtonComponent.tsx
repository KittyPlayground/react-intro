
export default  function ButtonComponent (props){



 return (
    <>
        {props.name === 'Add 1' ?
        <button onClick={() =>{ props.setCount(props.count + 1)}}>Add 1</button>
        :
        <button onClick={() =>{ props.setCount(props.count - 1)}}>Subtract 1</button>
        }
    </>
    )
}
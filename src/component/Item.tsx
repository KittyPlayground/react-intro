export default  function Item(props: {title: string, desc: string}) {
    const {title, desc} = props
    return (
       <>
           <h1>{title}</h1>
           <p>{desc}</p>
       </>
    )
}
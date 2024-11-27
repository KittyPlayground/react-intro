import './App.css'
import Item from "./component/Item.tsx";
function App() {
const itemArray =[]
    for(const item of itemList){
        itemArray.push(
            <Item title={item.title} desc={item.desc}/>
        )
    }
    return (
       <>
          {/*<Item title={itemList[0].title} desc={itemList[0].desc}/>
           <Item title={itemList[1].title} desc={itemList[1].desc}/>
           */}
           {/*<Item{...itemList[0]}/>
           <Item{...itemList[1]}/>
           <Item{...itemList[2]}/>*/}
           {/*{
               itemList.map(item=>{
               return<Item title={item.title} desc={item.desc}/>
               })
           }*/}
           {itemArray}
       </>
    )
}
const itemList = [
    {title: "RAD", desc: "lorem ipsum"},
    {title: "CAD", desc: "lorem ipsum"},
    {title: "BAD", desc: "lorem ipsum"},
]

export default App

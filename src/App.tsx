// import A from "./A"

import { useState, type FormEvent } from "react"
import Child from "./Child"

// function App(){
//   // const x:string[] =  ["hello", "world"]
//   // const obj:{name:string, age:number} = {name:"xyz", age:9}
//   // let arr:(number|string)[] = [1,2,"hello"]
//   return(
//     <div>
//       {/* <A obj = {obj}/> */}
//       {/* <A><>this is child component {x}</></A> */}
//       <A><>this is child component</></A>
//     </div>
//   )
// }
// export default App


//Conditional rendering

// function App(){
//   let num:number = 10

//   return(<div>
//     {/* {if(num > 5){
//       return <p>{num}</p>
//     }
//     return <p>less than 10</p>
//     } */}
//     {/* {num>=5?<p>{num}</p>:<p>{num} Less than 5</p>} */}
//   </div>)
// }
// export default App
// interface formdata{
//   name:string
// }
// function App(){
//   // const [username, setuname] = useState<formdata>({name:""})
//   const [username, setuname] = useState([{name:""}])

//   const [field, setfield] = useState<string>("")
//   const [arr, setArr] = useState<string []>([])
//   // const [obj, setObj] = useState({name:"pari", age:9})
//   const fun = (event:React.ChangeEvent<HTMLInputElement>)=>{
//     // setuname(event.target.value)
//     setuname({...username, [event.target.name]:[event.target.value]})
//     console.log(username)
//   }
//   const handleSubmit=(event:React.SubmitEvent<HTMLFormElement>)=>{
//     event.preventDefault()
//     // setuname(event.currentTarget as HTMLInputElement)
//     // setArr([...arr, username])
//     console.log(arr)
//     setfield("")
//   }
//   return(
//     <div>
//       {/* <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter name..."></input>
//         <button type="submit">submit</button>
//       </form> */}


//       <input type="text" placeholder="Enter name" name="name" value={username.name} onChange={fun}/>
//       <button onClick={()=>{handleSubmit}}>submit</button>
//       {/* <button onClick={()=>setuname("xyz")}>click</button> */}
//       {/* <p>{username}</p> */}
//       {username.map((user)=>{
//         return(<p>{user.name}</p>)
//       })}
//       {/* <p>{username.name}</p> */}
//       {/* <p>{obj.name}</p>
//        <p>{obj.age}</p> */}
//     </div>
//   )
// }
// export default App


//event handling
// function App(){
//   const[color, setColor] = useState("red")
//   const funClicked=()=>{
//     setColor("blue")
//     console.log(color)
//   }
//   const funMouseMove=()=>{
//     setColor("purple")
//     console.log(color)
//   }
//    const funMouseDown=()=>{
//     setColor("black")
//     console.log(color)
//   }
//   return(
//     <div>
//       <button onMouseOut={funClicked}>click</button>
//       <button onMouseUp={funMouseMove}>click</button>
//       <button onMouseDown={funMouseDown}>click</button>
//       <p>{color}</p>
//     </div>
//   )
// }
// export default App

//product page
// function App(){
//   // const[data, setData] = useState([])
//   const[data, setData] = useState([{ProductName:"Mobile", price:9000}, {ProductName:"Laptop", price:20000}, {ProductName:"Tab", price:9000}, {ProductName:"Mouse", price:1000}])
//   return(
//   <div>
//     {data.length==0?"No products found":<div>
//     {data.map((element, index)=>{
//       return(
//         <div key = {index}>
//           <p>{element.ProductName}</p>
//           <p>{element.price}</p>
//         </div>
//       )
//     })}</div>
//     }
//   </div>
//  )
//  }
 
// export default App



function App(){
  const[data, setData] = useState("")
  const fun=(childdata:string)=>{
    setData(childdata)
  }
  return(
    <div>
      <Child fun={fun}></Child>
      <p>passed from child component: {data}</p>
    </div>
  )
}
// function Child({fun}){
//   const[childdata, setChildData] = useState<string>("")
//   return(
//     <div>
//       <input type="text" placeholder="Type Something..." value={childdata} onChange={(e)=>setChildData(e.target.value)}></input>
      
//       <button type="submit">click</button>
      
//     </div>
//   )
// }
export default App


//counter
// function App(){
//   const[number, setNumber] = useState(0)
//   const inc=()=>{
//     setNumber(prev=>prev+1)
//   }
//   const reset=()=>{
//     setNumber(0)
//   }
//   return(
//     <div>
//       {number}
//       <button onClick={inc}>increase</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }
// export default App
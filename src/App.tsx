// import A from "./A"

import { useState, type FormEvent } from "react"

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

// function App(){
//   const [username, setuname] = useState<string>("")
//   // const [field, setfield] = useState<string>("")
//   // const [arr, setArr] = useState([1,2,3])
//   // const [obj, setObj] = useState({name:"pari", age:9})
//   const fun = (event:React.ChangeEvent<HTMLInputElement>)=>{
//     setuname(event.target.value)
//     console.log(username)
//   }
//   return(
//     <div>
//       <input type="text" placeholder="Enter name" value={username} onChange={fun}/>
//       {/* <button onClick={()=>{handleSubmit}}>submit</button> */}
//       {/* <button onClick={()=>setuname("xyz")}>click</button> */}
//       <p>{username}</p>
//       {/* {arr.map((element)=>{
//         return(
//           <p>{element}</p>
//         )
//       })} */}
//       {/* <p>{obj.name}</p>
//        <p>{obj.age}</p> */}
//     </div>
//   )
// }
// export default App


//event handling
function App(){
  const[color, setColor] = useState("red")
  const funClicked=()=>{
    setColor("blue")
  }
  return(
    <div>
      <button onDoubleClick={funClicked}>click</button>
      <p>{color}</p>
    </div>
  )
}
export default App
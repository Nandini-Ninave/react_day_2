// import A from "./A"

import { useState } from "react"

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

function App(){
  const [username, setuname] = useState("abc")
  return(
    <div>
      <p>{username}</p>
      <button onClick={()=>setuname("xyz")}></button>
    </div>
  )
}
export default App
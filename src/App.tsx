import A from "./A"

function App(){
  // const x:string[] =  ["hello", "world"]
  // const obj:{name:string, age:number} = {name:"xyz", age:9}
  // let arr:(number|string)[] = [1,2,"hello"]
  return(
    <div>
      {/* <A obj = {obj}/> */}
      {/* <A><>this is child component {x}</></A> */}
      <A><>this is child component</></A>
    </div>
  )
}
export default App
// function A(props:{arr:(number|string)[]}){
//     return(
//         <div>
//             <p>{props.arr[0]}</p>
//             <p>{props.arr[1]}</p>
//             <p>{props.arr[2]}</p>
//         </div>
//     )
// }
// export default A


// function A(props:{obj:{name:string, age:number}}){
//     // console.log(props.obj.name)
//     const{obj:{name}, obj:{age}}=props
//     return(
//         <div><p>{name}</p>
//         <p>{age}</p></div>
//     )
// }
// export default A

// function A(props:{obj:{name:string, age:number}}){
//     props.obj.name = "abc"
//     return(<div>{props.obj.name}</div>)
// }
// export default A

function A(props:{children:React.ReactElement}){
    return(<div>
        {/* <p>{children}</p> */}
        <p>{props.children}</p>
        </div>)
}
export default A

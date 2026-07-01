function Child({fun}:any){
    const sendData=()=>{
        fun("Data from child")
    }
    return(
        <button onClick={sendData}>click</button>
    )
}
export default Child
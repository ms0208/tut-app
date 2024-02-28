import React ,{useState, useEffect} from 'react'
function R12()
{
    const[data,setdata] = useState(10);
    const[count,setcount] = useState(1);
    useEffect (()=>{
        console.log("Hi Everyone");
    },[data])
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Update Count</button>
        <h1>data:{data}</h1>
        <button onClick={()=> setdata(data+1)}>Update Data</button>
        </>
    )
}
export default R12;
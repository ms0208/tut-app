import React,{useState} from "react";
/** To access state using hooks */
function R10()
{
    const[data,setdata] = useState("Manav");
    return(
        <>
        <h1>{data}</h1>
        <button onClick={()=>setdata("sidhu")}>Update Data</button>
        </>
    )
}
export default R10;
// Use Memo hooks in react js
import React ,{useState,useMemo} from 'react'
function R22()
{
    const[count,setcount] = useState(0);
    const[item,setitem] = useState(10);
    const MC = useMemo(function multi(){
        alert("Hi");
        return count*5;
    },[count])
    return(
        <>
        <h1>Count:{count}</h1>
        <h1>Item:{item}</h1>
        <h1>{MC}</h1>
        <button onClick={()=>setcount(count+1)}>Update Count</button>
        <button onClick={()=>setitem(item*10)}>Update Item</button>
        </>
    )
}
export default R22;
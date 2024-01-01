import { useState } from "react"

function R3() {
    const [log, setlog] = useState(true);
    const [log2, setlog2] = useState(true);
    const [log3, setlog3] = useState(1);
    const [log4, setlog4] = useState(2);
    if (log) {
        return (
            <>
                <h1>Manav</h1>
            </>
        )
    }
    else {
        return (
            <>
                <h1>Sharma</h1>
            </>
        )
    }
    /*
    2.  return (
    <>
    {log2 ? <h1 >Manav </h1>:<h1>Sharma </h1>}
    </>
   )
   3.const [log3,setlog3] = useState(1);
   if(log3==1)
   {
    return(
        <>
        <h1>Manav</h1>
        </>
    )
   }
   else if(log3==2)
   {
    return(
        <>
        <h1>Sharma</h1>
        </>
    )
   }
   else{
    return(
        <>
        <h1>NULL</h1>
        </>
    )
   }
   4.  return (
    <>
    {
    log4==1? <h1 >Manav </h1>
    :log4==2?<h1>Sharma </h1>
    :<h1>NULL
    }
    </>
   )
   */
}
export default R3;
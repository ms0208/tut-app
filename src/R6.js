// props in render.
import React from 'react';
import User4 from './user4';
function R6()
{
    const[name,setname] = React.useState("Manav");
    return(
        <>
        <User4 name = {name} />
        <button onClick={()=> setname("Sharma")}>Update</button>
        </>
    )
}
export default R6;
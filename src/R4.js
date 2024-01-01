import User3 from './user3';
function R4()
{
    function getdata()
    {
        console.warn("Manav Sharma");
        alert("Pranav Sharma");
    }
    return(
        <>
        <br></br>
        <br></br>
        <User3 data = {getdata}/>
        </>
    )
}
export default R4;
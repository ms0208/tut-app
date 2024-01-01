import React from 'react';
class user5 extends React.Component{
    componentWillUnmount()
    {
        alert("Called");
    }
    render()
    {
        return(
            <>
            <h1> Student Component</h1>
            </>
        )
    }
}
export default user5;
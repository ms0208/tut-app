// User9.js
import React from 'react';

function User9(props) {
    function handleClick() {
        // Pass data back to the parent component
        props.alert("Data from User9 Manav");
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    );
}

export default User9;

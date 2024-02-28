// Forward ref
import React, { useRef } from 'react';
import User10 from './user10';

function R25() {
    const userRef = useRef(null);

    function handleClick() {
        userRef.current.value = "2000";
    }

    return (
        <>
            <User10 ref={userRef} />
            <button onClick={handleClick}>Update Input Value</button>
        </>
    );
}

export default R25;


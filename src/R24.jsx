// Use Ref in React JS.
import React, { useRef } from 'react';

function R24() {
    let inputRef = useRef(null);

    function handleInput() {
        console.warn("Function call");
        inputRef.current.value = "Pranav";
        inputRef.current.focus();
    }

    return (
        <>
            <input type="text" ref={inputRef}></input>
            <button onClick={handleInput}>Handle Input</button>
        </>
    );
}

export default R24;

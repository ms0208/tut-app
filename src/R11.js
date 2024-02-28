import React, { useState, useEffect } from 'react';

function R11() {
    const [data, setData] = useState(0);

    useEffect(() => {
        console.log("Hi");
        alert("Hello");
    }, []);

    return (
        <>
            <h1>{data}</h1>
            <button onClick={() => setData(1)}>Update</button>
        </>
    );
}

export default R11;

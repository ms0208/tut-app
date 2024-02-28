import React, { useState, useEffect } from 'react';

function User6(props) {
    // useEffect is used for side effects, in this case, logging to the console.
    useEffect(() => {
        console.log("Hi pranav");
        // The empty dependency array means this effect runs once when the component mounts.
    }, [props.data]);

    return (
        <>
            <h1>Count Props: {props.count}</h1>
            <h1>Data Props: {props.data}</h1>
        </>
    );
}

export default User6;

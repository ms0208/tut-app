import React, { useState } from 'react';

function R26() {
    const [val, setVal] = useState("Manav");

    const handleChange = (e) => {
        setVal(e.target.value);
    };

    return (
        <>
            <h1>Controlled Components</h1>
            <input type="text" value={val} onChange={handleChange} />
            <h1>Value: {val}</h1>
        </>
    );
}

export default R26;

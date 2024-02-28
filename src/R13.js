import React, { useState, useEffect } from 'react';
import User6 from './user6';

function R13() {
    const [data, setdata] = useState(10);
    const [count, setcount] = useState(100);

    return (
        <>
            <User6 count={count} data={data} />
            <button onClick={() => setcount(prevCount => prevCount + 1)}>Update Count</button>
            <button onClick={() => setdata(prevData => prevData + 1)}>Update data</button>
        </>
    );
}

export default R13;

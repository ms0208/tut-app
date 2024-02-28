// Send data child to parent
import React from 'react';
import User9 from './user9';

function R20() {
    function parentAlert(data) {
        alert("Received data in R20: " + data);
    }

    return (
        <>
            <User9 alert={parentAlert} />
        </>
    );
}

export default R20;

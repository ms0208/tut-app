// send data parent to child 
import React from 'react';
import User8 from './user8';

function R19() {
    let data = "Manav"; // send paren(R19) to child(user8)
    return (
        <>
            <User8 name={data} />
        </>
    );
}

export default R19;

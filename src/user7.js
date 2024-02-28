import React from 'react';

function User7(props) {
    return (
        <>
            {props.data && (
                <h1>{props.data.name}</h1>
            )}
        </>
    );
}

export default User7;

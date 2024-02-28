import React, { forwardRef } from 'react';

const User10 = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    );
});

export default User10;


// Reuse component
import React from 'react'
import User7 from './user7'

function R17() {
    const users = [
        { name: "Manav" },
        { name: "Pranav" }
    ];

    return (
        <>
            {
                users.map((item) => {
                    return <User7 data={item} />
                })
            }
        </>
    )
}

export default R17;
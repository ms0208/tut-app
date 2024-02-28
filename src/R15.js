import React from 'react';

function R15() {
    const students = ["Manav", "Sharma"];

    // This console.log is fine, it will log each item in the array
    students.forEach((item) => {
        alert(item);
    });

    return (
        <>
            {
                students.map((data) => (
                    <h1 key={data}>{data}</h1>
                ))
            }
        </>
    );
}

export default R15;

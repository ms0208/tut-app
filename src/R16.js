import React from 'react';

function R16() {
    const students = [
        {
            name: "Manav",
            email: "manav@02",
            contact: 111,
        }
    ];

    const data1 = [
        {
            name: "Pranav",
            address: [
                {
                    house: 10,
                    city: "Noida"
                }
            ]
        }
    ];

    return (
        <>
            {
                students.map((data) => (
                    <div key={data.name}>
                        <h1>Name is {data.name}</h1>
                        <h1>Email is {data.email}</h1>
                        <h1>Contact is {data.contact}</h1>
                    </div>
                ))
            }

            {
                data1.map((data) => (
                    <div key={data.name}>
                        <h1>{data.name}</h1>
                        <table key={data.name}>
                            <thead>
                                <tr>
                                    <th>House</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.address.map((data) => (
                                        <tr key={data.house}>
                                            <td>{data.house}</td>
                                            <td>{data.city}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ))}
        </>
    );
}

export default R16;


import React, { useState } from 'react';
import './App.css';
import R3 from './R3';
function R2() {
    const [name, setName] = useState('');
    const [enter, setEnter] = useState('');
    const [tnc, setTnc] = useState(false);

    function getFormData(e) {
        e.preventDefault();
        console.log(name, enter, tnc);
        alert(name);
        alert(enter);
        alert(tnc);
    }

    return (
        <>
            <h1>Basic Form in ReactJS</h1>
            <br />
            <form onSubmit={getFormData}>
                <label>
                    Name:
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Select Course:
                    <select value={enter} onChange={(e) => setEnter(e.target.value)}>
                        <option>Web D</option>
                        <option>App D</option>
                        <option>DSA</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={tnc}
                        onChange={(e) => setTnc(e.target.checked)}
                    />
                    Accept terms & conditions
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            < R3/>
        </>
    );
}

export default R2;


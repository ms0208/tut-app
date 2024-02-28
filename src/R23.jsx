// Refernces in React js
import React, { createRef } from 'react';

class R23 extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef();
    }

    componentDidMount() {
        console.warn("Current value:", this.inputRef.current.value);
        this.inputRef.current.value = "1000";
    }

    handleChange = () => {
        console.warn("Updated value:", this.inputRef.current.value);
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} onChange={this.handleChange}></input>
            </>
        );
    }
}

export default R23;


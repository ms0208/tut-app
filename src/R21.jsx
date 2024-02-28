// Remove a rendering 
import React, { PureComponent } from 'react';

class R21 extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        };
    }
    render() {
        console.warn("Rendering");
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </>
        );
    }
}

export default R21;

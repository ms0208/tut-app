/** Component did unmount */
import React from 'react';
import User5 from './user5';
class R9 extends  React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <>
                {
                    this.state.show ? <User5 /> : <h1>Child Component </h1>
                }
                <button onClick={()=> this.setState({show:!this.state.show})}>Toggle</button>
            </>
        )
    }
}
export default R9;
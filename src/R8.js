/** Should update */
import React from 'react';
class R8 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate()
    {
        return true;
    }
    render()
    {
        return(
            <>
            <h1>Should Component Update {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Update Count</button>
            </>
        )
    }
}
export default R8;
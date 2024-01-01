import React from 'react';
class user4 extends React.Component{
    constructor()
    {
        super();
        this.state = {
            name1:"Manav"
        }
        console.log("Manav");
    }
    componentDidMount()
    {
        console.log(" hi say to you all");
    }
    render()
    {
        console.log(this.props);
        console.log("Sharma");
        return(
            <>
            <h1>User 4 Componets</h1>
            <h1>{this.props.name}</h1>
            <br></br>
            <h1>{this.state.name1}</h1>
            <br></br>
            <button onClick={()=>this.setState({name1:"sharma"})}>Update2</button>
            </>
        )
    }
}
export default user4;
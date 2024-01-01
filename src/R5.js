// constructor in react js
import React, { Component } from "react";
class R5 extends React.Component {
    constructor()
    {
        super();
        console.log("Constructor");
        this.state = {
            data:"Anil"
        }
    }
    render()
    {
        return(
            <>
            <h1>Hello Everyone</h1>
            <h1>Hi {this.state.data}</h1>
            </>
        )
    }
}
export default R5;
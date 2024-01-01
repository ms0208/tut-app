import React, { Component } from 'react';
/** Componet did update */
class R7 extends React.Component {
  constructor() {
    super();
    console.log("Construction");
    this.state = {
      name: "Manav"
    }
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  handleUpdateClick = () => {
    this.setState({ name: "Sharma" });
  }

  render() {
    console.log("Render");
    return (
      <>
        <h1>Component Update</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleUpdateClick}>Update</button>
      </>
    );
  }
}

export default R7;
/*
 * import React, { Component } from 'react';

class MyComponent extends Component {
  // State and other methods go here...

  componentDidUpdate(prevProps, prevState) {
    // You can compare current props and state with previous props and state
    // to determine if an update occurred and take necessary actions.

    if (this.props.someValue !== prevProps.someValue) {
      // Perform some action when the 'someValue' prop changes
      console.log('someValue prop has changed');
      // You can perform side effects, make API calls, etc.
    }

    if (this.state.someState !== prevState.someState) {
      // Perform some action when the 'someState' state changes
      console.log('someState state has changed');
      // You can perform side effects, make API calls, etc.
    }
  }

  render() {
    // Render your component JSX here...
    return (
      <div>
        {/* Your component content *}
        </div>
        );
      }
    }
    
    export default MyComponent;*/
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      context: {},
      count: 0
    }
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Next steps: Error handling using the error object
  }

  render() {

      let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";

      const counterBtn = () => {
        this.setState({
          count: this.state.count + 1
        });
      };


      return (
      <div>
        <h3>Hello World!</h3>
        <h1>Congratulations {userName}!</h1> <h3>This is the tab you made :-)</h3>
        <p>{this.state.count}</p>
        <input type="text" placeholder="Test"></input>
        <button type="submit">Submit</button>
        <button onClick={()=>counterBtn()}>Count</button>
      </div>
      );
  }
}
export default Tab;
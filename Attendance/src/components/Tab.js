// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import Clock from './Clock/Clock'
import CheckButton from './CheckButton/CheckButton'
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
      count: 0,
      input: '',
      firstName: '',
      checkIn: false
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
 counterBtn = () => {
        this.setState({
          count: this.state.count + 1
        });
      };

  onNameChange = (event) => {
    this.setState({input: event.target.value})
  }


  onSubmit = () => {
    this.setState({firstName: this.state.input})
  }

  onCheckIn = (value) => {
    this.setState({checkIn: value})
  }


  render() {
      let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";

      return (
      <div>
      <Clock />
      <CheckButton />
        <h3>Hello World!</h3>
        <h1>Congratulations {userName}!</h1> <h3>This is the tab you made :-)</h3>
          <div>
            {       
              this.state.checkIn === false ? <div>{this.state.firstName} Checked out</div> : <div>{this.state.firstName} Checked in</div>          
            }
        </div>
        <p>{this.state.count}</p>


        <input type="text" placeholder="First name" onChange={this.onNameChange}></input>
        <button type="submit" onClick={() => this.onSubmit()}>Submit</button>

        
        <button onClick={()=>this.onCheckIn(true)}>Check in</button>
        <button onClick={()=>this.onCheckIn(false)}>Check out</button>
        <button onClick={() => this.counterBtn()}>Count</button>


      </div>
      );
  }
}
export default Tab;
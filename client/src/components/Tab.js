// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './Clock/Clock'
import CheckButton from './CheckButton/CheckButton'
import List from './List/List'
import * as microsoftTeams from "@microsoft/teams-js";

//npm package - momentjs
import moment from 'moment';

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
const Tab = (props) => {
  const [context, setContext] = useState({})
  const [users, setUsers] = useState('')

  //timer
  const [timer, setTimer] = useState(0)

  const [day, setDay] = useState(),
        [hour, setHour] = useState(),
        [minute, setMinute] = useState(),
        [second, setSecond] = useState()

useEffect(() => {
 // Get the user context from Teams and set it in the state
  microsoftTeams.getContext((context, error) => {
    setContext(context)
  });
// Next steps: Error handling using the error object

// let members = await client.api('/me/chats/19:82625bfe-49b5-4f8b-a5b3-1b0c92568293_84f3b80b-cb24-491f-91e2-3a13a905e2c9@unq.gbl.spaces/members')
 fetch('https://graph.microsoft.com/v1.0/me/chats/19:8b081ef6-4792-4def-b2c9-c363a1bf41d5_5031bb31-22c0-4f6f-9f73-91d34ab2b32d@unq.gbl.spaces/members')
  .then(response => response.json())
  .then(user => setUsers(user))
}, [])


useEffect(() => {
  setInterval(() => {
      setTimer(prevTime => prevTime + 1)
      if (timer > 100) {
          setTimer(0)                  
      }
  }, 1000)
}, [])


useEffect(() => {
  fetch('http://localhost:4000/time')
  .then(response => response.json())
  .then(data => {
      setDay(data.day)
      setHour(data.hour)
      setMinute(data.minute)
      setSecond(data.second)
  })
},[timer])



      let userName = Object.keys(context).length > 0 ? context['userPrincipalName'] : "";
      let userId = Object.keys(context).length > 0 ? context['userObjectId'] : "";
      return (
        <div>

          <Clock 
            day={day} 
            hour={hour} 
            minute={minute} 
            second={second}    
          />
          <List />
          <div>
            <h3>Närvarosystem</h3>
            <h1>userPrincalName {userName}!</h1>
            {/* <h1>userObjectId {userid}!</h1> 
        <h1>CHATID {this.state.context['chatId']} !</h1>  */}

            <div>
              {
                //if klockan är mellan 6 och 9 - Check in. Else if mindre än 16 - check out
                hour >= 0 && hour < 9 ? <CheckButton userName={userName} userId={userId} name="Check In" />
                :
                hour >= 16 ? <CheckButton userName={userName} userId={userId} variant="success" name="Check Out" /> 
                : <CheckButton hour={hour} minute={minute} userName={userName} userId={userId} variant="warning" name="Check Out" />
              }
            </div>

          </div>

          
        </div>
      );
  
}
export default Tab;
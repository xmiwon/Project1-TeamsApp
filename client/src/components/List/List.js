import React, { useEffect, useState, useRef  } from 'react';
import './List.css'
import { Table } from 'react-bootstrap'
import io from 'socket.io-client'




let socket;

const List = () => {
  const [users, setUsers] = useState('')

  let paddingRight;
  users.length < 5 ? paddingRight = '' : paddingRight = '15px'

  //Scroll to bottom of list
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  

  useEffect(() => {
    fetch('http://localhost:4000/getfile')
      .then(response => response.json())
      .then(data => setUsers(data))
      console.log('This will run once')
  }, [])

  useEffect(() => {
    socket = io("http://localhost:4000")
  //listening from server
  socket.on('sendmessage', () => {
    fetch('http://localhost:4000/getfile')
      .then(response => response.json())
      .then(data => setUsers(data))
  })

  console.log('This will run every time')
  }, [])


  useEffect(() => {
    scrollToBottom()
  },[users])


    return (
        <div>
<Table striped bordered hover variant="dark">

  <thead id="table-head" style={{ paddingRight: paddingRight}}>
    <tr id="tr-head">
      <th>Date</th>
      <th>Name</th>
      <th>IN</th>
      <th>OUT</th>
    </tr>
  </thead>
    <tbody id="table-body">
        {
          users ? (
            users.map(user => {
            return (
              <tr id="tr-body">
                <td>{user.date}</td>
                <td>{user.name}</td>
                <td>{user.in}</td>
                <td>{user.out}</td>
              </tr>
            )
          }) ): <h4>No data..</h4> 
        }  
        <div ref={messagesEndRef}/>
    </tbody>


</Table>
        </div>
    )
}

export default List;
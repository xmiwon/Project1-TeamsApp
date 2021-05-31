import React, { useEffect } from 'react';
import './CheckButton.css'
import { Button} from 'react-bootstrap';
import io from 'socket.io-client'

let socket;

const Checkbutton = ({userName, name, variant, userId, minute, hour}) => {
 

    useEffect(() => socket = io("http://localhost:4000"), [])

    
    const onButtonSubmit = () => {
        if(hour >= 0 && hour < 9) {
        fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: 'gori',
                userId: userId
            })    
        })
        .then(response => response.json())
            socket.emit('sendData')
        }
        else {
            console.log('Modal launching')
        }
        
    }


    return (
        <div className="button-container">
            <Button onClick={() => onButtonSubmit()} variant={variant} size="lg" block>{name}</Button>
        </div>
    )
}

export default Checkbutton;
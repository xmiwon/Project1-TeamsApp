import React from 'react';
import './Clock.css'


import { Button, Container, Col, Row } from 'react-bootstrap';

const Clock = () => {
    return (
        <Container>
            <Row>
                <Col className="center">
                    <span className="clock-value">WED</span>
                    <Row>
                        <span className="gray center">day</span>
                    </Row>
                </Col>


                <Col className="center">
                    <span className="clock-value">13</span>
                    <Row>
                        <span className="gray center">hr</span>
                    </Row>
                </Col>


                <Col className="center">
                    <span className="clock-value">21</span>
                    <Row>
                        <span className="gray center">min</span>
                    </Row>
                </Col>

                
                <Col className="center">
                    <span className="clock-value">11</span>
                    <Row>
                        <span className="gray center">sec</span>
                    </Row>
                </Col>
            </Row>
        </Container>
        
     
    )
}

export default Clock;
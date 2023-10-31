import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Foods.css'
import Pizza from '../Pizza/Pizza';
import Steak from '../Steak/Steak';
import Pasta from '../Pasta/Pasta';
import Hamburger from '../Hamburger/Hamburger';
import Seafood from '../Seafood/Seafood';

function Foods() {
    return (
        <Container className='py-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Pizza Section</Accordion.Header>
                    <Accordion.Body>
                        <Pizza />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Steak Section</Accordion.Header>
                    <Accordion.Body>
                        <Steak />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Pasta Section</Accordion.Header>
                    <Accordion.Body>
                        <Pasta />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Hamburger Section</Accordion.Header>
                    <Accordion.Body>
                        <Hamburger />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Seafood Section</Accordion.Header>
                    <Accordion.Body>
                        <Seafood />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Foods
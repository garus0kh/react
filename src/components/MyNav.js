import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class MyNav extends Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">어서오세요</Navbar.Brand>
                
                <Nav className="mr-auto">
                    <Nav.Link href="#home" onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangePage('property');
                    }.bind(this)}>재산세</Nav.Link>
                    <Nav.Link href="#features" onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangePage('trade');
                    }.bind(this)}>복비</Nav.Link>
                    <Nav.Link href="#pricing" onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangePage('get');
                    }.bind(this)}>취득세</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default MyNav;
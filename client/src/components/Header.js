import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import { Link } from 'react-router-dom';
import { routes } from "../reducers/routes";

export default function Header() {
    return (
        <Navbar style={{backgroundColor:'darkgreen'}} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color:'white', fontWeight:"bolder"}}>&#127806; {' '}AgriECom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            routes.map((item,index)=>{
                            if(!item.header)return;
                            return <Nav.Link><Link to={item.path} style={{color:'white', textDecoration:'none'}}>{item.title}</Link></Nav.Link>;
                            })
                        }
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

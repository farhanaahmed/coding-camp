import React from 'react';
import { Navbar , Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'



const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Nav className="mx-auto p-2">
                    <NavItem>
                        <Link className="nav-link links"   to="/">Home</Link>
                    </NavItem> 
                    <NavItem>   
                        <Link  className="nav-link links" to="/about">About</Link> 
                    </NavItem> 
                    <NavItem>    
                        <Link className="nav-link links"   to="/contact">Contact Us</Link> 
                    </NavItem> 
                    <NavItem>    
                        <Link className="nav-link links"   to="/services">Services</Link> 
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
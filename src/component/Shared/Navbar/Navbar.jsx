import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PopOver from '../PopOver/PopOver';
import { useAppContext } from '../../../context';

const NavBar = () => {
    const { state: { user } } = useAppContext();
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    return (
        <Navbar className="navbar navbar-expand-lg navbar-light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navBrn">
                    <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Traidpoint <span className="navHighlight">Consulting</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="parent-item">
                            <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
                            <div className="nested-navbar">
                                <Nav.Item>
                                    <Nav.Link href="#service1" onClick={() => handleServiceClick("service1")}>Strategy & Research</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#service2" onClick={() => handleServiceClick("service2")}>Webdesign</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#service3" onClick={() => handleServiceClick("service3")}>Web Development</Nav.Link>
                                </Nav.Item>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#testimonial" className="nav-link">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {
                                user.email ?
                                    <div>
                                        <PopOver />
                                    </div> :
                                    <Link to="/login">
                                        <button className="loginBtn">Login</button>
                                    </Link>
                            }
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

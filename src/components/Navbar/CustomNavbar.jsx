import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="nav-for-web w-100">
            <Container>
                <Navbar.Brand className='main-title' href="#home">API Example</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='home' to="/">Home</Link>
                        <Link className='products' to="/products">Products</Link>
                        <Link className='foods' to="/foods">Foods</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
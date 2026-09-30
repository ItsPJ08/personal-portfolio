import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';

export default function AppNavbar() {
    return (
<Navbar expand="lg" variant="dark" className="bg-dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/#projects">Github Projects</Nav.Link>
            <Nav.Link as={Link} to="/walkthrough">Walkthrough</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          </Nav>
          <Nav className="ms-auto my-2 my-lg-0 align-items-center">
            <Nav.Link
              href="https://www.linkedin.com/in/prabjot-pannu-b93955328/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" width="28" height="28" />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/ItsPJ08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" width="28" height="28" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);
}
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import mossLogo from "../assets/logo/mafLogo.png";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="flex">
        <Navbar.Brand href="/" className="flex">
          <img className="h-8 mr-2" src={mossLogo} alt="moss & fern logo" />
          <h1 className="text-2xl">Moss and Fern</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Button variant="success">Add New Plant</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

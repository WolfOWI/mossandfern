import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import mossLogo from "../assets/logo/mafLogo.png";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-green-950">
      <Container className="flex">
        <Navbar.Brand href="/" className="flex mr-8">
          <img className="h-8 mr-2" src={mossLogo} alt="moss & fern logo" />
          <h1 className="text-2xl text-white fw-bold m-0">Moss & Fern</h1>
          <div className="w-12"> {/* Spacer */} </div>
          <h2 className="text-2xl text-green-400 fw-reg m-0">Store Manager</h2>
        </Navbar.Brand>
        <div className="lg:w-full"></div>
        <Nav className="me-auto min-w-fit">
          <Button variant="success" className="font-sans fw-bold px-6 flex items-center">
            <svg
              className="w-6 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
            </svg>
            Add Plant
          </Button>{" "}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

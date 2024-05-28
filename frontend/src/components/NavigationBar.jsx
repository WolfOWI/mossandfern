import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import mossLogo from "../assets/logo/mafLogo.png";

import { createPlant } from "../services/plantService";

function NavigationBar({ onPlantAdded }) {
  // States
  const [modalShow, setModalShow] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    thumbnail: "",
    description: "",
    inStock: false,
  });

  // Modal Open & Close
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  // When form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    const isFilled = Object.values(formValues).some((value) => value !== "" && value !== false);
    setIsFormFilled(isFilled);
  }, [formValues]);

  // Generate For Me Details Button
  const handleGenerate = () => {
    setFormValues({
      title: "Garden Mum",
      price: "80",
      thumbnail: "https://lifestyle.co.za/wp-content/uploads/2020/06/CHRYSANTHEMUM-MORIFOLIUM.png",
      description:
        "Available in an incredible selection of long-lasting, showy blooms from spring right through to autumn. Plant these in the garden after flowering to flower next season.",
      inStock: true,
    });
  };

  // Clear Fields
  const handleClear = () => {
    setFormValues({
      title: "",
      price: "",
      thumbnail: "",
      description: "",
      inStock: false,
    });
  };

  // Add Plant Click
  const handleAddClick = async () => {
    try {
      const newPlant = await createPlant(formValues);
      console.log("Plant created successfully:", newPlant);
      handleClear();
      handleModalClose();
      if (onPlantAdded) {
        setTimeout(() => {
          onPlantAdded(); // Refresh the plant list on the homepage and scroll to bottom
        }, 300);
      }
    } catch (error) {
      console.error("Error creating plant:", error);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-green-950">
        <Container className="flex">
          <Navbar.Brand href="/" className="flex mr-8">
            <img className="h-8 mr-2" src={mossLogo} alt="moss & fern logo" />
            <h1 className="text-2xl text-white fw-bold m-0 hidden lg:block">Moss&Fern Shop</h1>
            <h1 className="text-2xl text-white fw-bold m-0 hidden md:block lg:hidden">M&F Shop</h1>
            <h1 className="text-2xl text-white fw-bold m-0 md:hidden">Shop</h1>
            <h2 className="text-2xl text-green-400 fw-reg m-0">Manager</h2>
          </Navbar.Brand>
          <div className="lg:w-full"></div>
          <Nav className="me-auto min-w-fit">
            <Button
              variant="success"
              className="font-sans fw-bold px-6 flex items-center justify-center"
              onClick={handleModalShow}
            >
              <svg
                className="w-6 fill-white lg:mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
              </svg>
              <svg
                className="w-6 fill-white lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M342-80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342Zm138-560q0-90 61-156t152-80q5-1 9 1t8 5q4 3 5.5 7.5t.5 9.5q-11 79-64.5 137.5T520-644v84h280q17 0 28.5 11.5T840-520v80q0 33-23.5 56.5T760-360H200q-33 0-56.5-23.5T120-440v-80q0-17 11.5-28.5T160-560h280v-84q-78-13-131.5-71.5T244-853q-1-5 .5-9.5t5.5-7.5q4-3 8-5t9-1q91 14 152 80t61 156Z" />
              </svg>
              <div className="hidden lg:block">Add Plant</div>
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>

      {/* Add Plant Modal */}
      <Modal show={modalShow} onHide={handleModalClose}>
        {/* Modal Header */}
        <Modal.Header closeButton className="border-none">
          <Modal.Title className="font-bold text-green-800 fs-2 mr-8">New Plant</Modal.Title>
          {!isFormFilled ? (
            <>
              {/* Fill for Me Btn */}
              <Button
                variant="outline-success"
                className="font-sans fw-bold px-6 flex items-center"
                onClick={handleGenerate}
              >
                Fill For Me
              </Button>
            </>
          ) : (
            <>
              {/* Clear Fields Btn */}
              <Button
                variant="outline-danger"
                className="font-sans fw-bold px-6 flex items-center"
                onClick={handleClear}
              >
                Clear Fields
              </Button>
            </>
          )}
        </Modal.Header>
        <Modal.Body className="mt-[-15px]">
          <>
            {/* Modal Form */}
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formValues.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formThumbnail">
              <Form.Label>Thumbnail URL</Form.Label>
              <Form.Control
                type="text"
                name="thumbnail"
                value={formValues.thumbnail}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formInStock">
              <Form.Check
                type="checkbox"
                name="inStock"
                label="In Stock"
                checked={formValues.inStock}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Add Plant Button */}
            <Button
              variant="success"
              className="font-sans fw-bold px-6 flex items-center"
              onClick={handleAddClick}
            >
              Add Plant
            </Button>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavigationBar;

// Event Info Page (Specific)

// Import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPlantById } from "../services/plantService";
import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

function PlantDetailsPage() {
  const { plantId } = useParams();
  const [selectedPlant, setSelectedPlant] = useState("");

  useEffect(() => {
    getPlantById(plantId)
      .then((data) => {
        setSelectedPlant(data);
      })
      .catch((err) => {
        console.log("Error getting plant details", err);
      });
  }, [plantId]);

  return (
    <>
      <NavigationBar />
      <Container className="mt-6 mb-24">
        <div className="mt-6 flex flex-col  md:flex-row">
          <img
            src={selectedPlant.thumbnail}
            alt="plant thumbnail"
            className="md:w-[40%] max-h-[500px] object-contain mr-4"
          ></img>
          <div className="md:w-[60%]">
            <h1 className="font-display mt-5">{selectedPlant.title}</h1>
            <h3 className="font-body text-green-700 mt-1">R{selectedPlant.price}</h3>
            <p className="font-body">{selectedPlant.description}</p>
            <div className="flex mt-4">
              <Button variant="success" className="font-sans fw-bold px-6 flex items-center">
                <svg
                  className="w-6 fill-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-40 80q-17 0-28.5-11.5T120-160v-97q0-16 6-30.5t17-25.5l505-504q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L313-143q-11 11-25.5 17t-30.5 6h-97Zm600-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
                Edit
              </Button>{" "}
              <div className="w-4"> {/* Spacer */} </div>
              <Button variant="danger" className="font-sans fw-bold px-6 flex items-center">
                <svg
                  className="w-6 fill-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" />
                </svg>
                Delete
              </Button>{" "}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PlantDetailsPage;

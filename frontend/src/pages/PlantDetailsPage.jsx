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
            <Button variant="success">Buy Now</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PlantDetailsPage;

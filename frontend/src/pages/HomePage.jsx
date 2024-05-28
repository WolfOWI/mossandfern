// Home Page

import { useState, useEffect, useRef } from "react";
import { getAllPlants } from "../services/plantService";

import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PlantCard from "../components/PlantCard";

function HomePage() {
  const [plants, setPlants] = useState([]);

  // Scrolling Functionality
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // On Page Load
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const data = await getAllPlants();
      setPlants(data);
    } catch (err) {
      console.log(err);
    }
  };

  // After Modal Adding
  const plantAddedRefreshAndScroll = async () => {
    await fetchPlants();
    scrollToBottom();
  };

  return (
    <>
      <div ref={topRef}></div>
      <NavigationBar onPlantAdded={plantAddedRefreshAndScroll} />
      <Container className="mt-6 mb-24">
        <Row>
          <Col className="flex items-center w-full justify-between">
            <h1 className="text-green-950 fw-bold">Listed Plants</h1>
            {/* To Button of Page Btn */}
            <Button
              variant="outline-success"
              className="font-sans fw-bold px-6 flex items-center"
              onClick={scrollToBottom}
            >
              To Bottom of Page
            </Button>
          </Col>
        </Row>

        <Row>
          {plants.length > 0 ? (
            plants.map((plant) => (
              <Col xs={12} lg={6} xl={4} key={plant._id}>
                <PlantCard
                  plantId={plant._id}
                  title={plant.title}
                  price={plant.price}
                  description={plant.description}
                  thumbnail={plant.thumbnail}
                  inStock={plant.inStock}
                />
              </Col>
            ))
          ) : (
            <div className="w-full flex justify-center items-center mt-5">
              <h3 className="text-green-700">Loading Plants</h3>
            </div>
          )}
        </Row>
        <div className="w-full flex items-center justify-end">
          {/* To Top of Page Btn */}
          <Button
            variant="outline-success"
            className="font-sans fw-bold px-6 flex items-center"
            onClick={scrollToTop}
          >
            To Top of Page
          </Button>
        </div>
      </Container>
      <div ref={bottomRef}> </div>
    </>
  );
}

export default HomePage;

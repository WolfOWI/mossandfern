// Home Page

import { useState, useEffect } from "react";
import { getAllPlants } from "../services/plantService";

import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlantCard from "../components/PlantCard";

function HomePage() {
  const [plants, setPlants] = useState([]);

  // On Page Load
  useEffect(() => {
    getAllPlants()
      .then((data) => {
        setPlants(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <Container className="mt-6 mb-24">
        <Row>
          <h1 className="text-green-950 fw-bold">Listed Plants</h1>
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
            <p>Loading Plant Products</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

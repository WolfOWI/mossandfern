// Home Page

import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/esm/Container";
import PlantCard from "../components/PlantCard";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <h1> Shop for Plants </h1>
        <Container>
          <PlantCard />
        </Container>
      </Container>
    </div>
  );
}

export default HomePage;

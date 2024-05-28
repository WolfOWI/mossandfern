import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function PlantCard({ title, price, description, thumbnail, inStock }) {
  return (
    <Card className="w-[25%] border-none p-2 bg-green-50">
      <Card.Img
        variant="top"
        src="https://www.purenature.co.nz/cdn/shop/products/AloeVera_b0b9f897-9273-4484-8fc5-aba67ae782b1.png?v=1653880818&width=713"
      />
      <Card.Body>
        <div className="flex items-center mb-3 w-full flex-wrap">
          <Card.Title className="mb-0 mr-4">Aloe Vera</Card.Title>
          <Badge bg="" className="bg-rose-500 fs-6">
            No Stock
          </Badge>
        </div>
        <Card.Text>
          An evergreen perennial, it originates from the Arabian Peninsula, but also grows wild in
          tropical, semi-tropical, and arid climates around the world.
        </Card.Text>
        <Badge bg="" className="bg-green-700 fs-6">
          R400
        </Badge>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;

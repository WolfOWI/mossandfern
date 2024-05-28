import { Link } from "react-router-dom";

import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function PlantCard({ plantId, title, price, description, thumbnail, inStock }) {
  return (
    <Link to={`/plants/${plantId}`} className="text-decoration-none">
      <Card className="border-none p-2 hover:bg-green-100 mt-6 rounded-3xl cursor-pointer">
        <Card.Img variant="top" src={thumbnail} className="h-64 object-contain" />
        <Card.Body>
          <div className="flex items-center mb-3 w-full flex-wrap">
            <Card.Title className="mb-0 mr-4">{title}</Card.Title>
            {!inStock ? (
              <Badge bg="" className="bg-rose-500 fs-6">
                Sold Out
              </Badge>
            ) : (
              <Badge bg="" className="bg-green-700 fs-6">
                R{price}
              </Badge>
            )}
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default PlantCard;

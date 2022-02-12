import React from "react";
import { Card, Button } from "react-bootstrap";

const CarCard = ({ car }) => {
  return (
    <Card className="car-card">
      <Card.Img
        variant="top"
        src={car.imageurl}
        style={{ maxheight: 240, width: "auto", height: "auto" }}
      />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "bold", fontSize: 18, color: "darkblue" }}
        > {car.model}
        </Card.Title>
        <Card.Title style={{ fontSize: 14, color: "gray", marginTop: -7 }}>
            Marka: {car.brand}
        </Card.Title>
        <Card.Text style={{ fontSize: 15, marginTop: 20 }}>
          {car.description}
        </Card.Text>
        <div>
          <h6>Dostępne Silniki</h6>

          {car.engines.map((engine, index) => (
            <p key={index} style={{ fontSize: 12, margin: 0 }}>
              {engine}
            </p>
          ))}
        </div>
      </Card.Body >
      <Card.Footer style={{ paddingTop: 0 }}>
        <a href={car.konfig} target="_blank">
        <Button variant="dark" className="mt-3 btn-block">
          Konfiguruj
        </Button>
        </a>
      </Card.Footer>
            
    </Card>
  );
};

export default CarCard;


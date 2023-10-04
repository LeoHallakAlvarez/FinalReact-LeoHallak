import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ image, price, title, id }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img as={Image} variant="top" src={image} fluid={true} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Card, Button, Image } from "react-bootstrap";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img as={Image} variant="top" src={product.image} fluid={true} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Precio: ${product.price}</Card.Text>
        <Card.Text>Cantidad: {product.amount}</Card.Text>
        <Card.Text>Total: ${product.price * product.amount}</Card.Text>
        <Button variant="danger" onClick={() => removeItem(product.id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;



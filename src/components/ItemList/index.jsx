import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item";

const ItemList = ({ products }) => {
  return (
    <Container fluid>
      <Row>
        {products.map((product) => (
          <Item
            product={product}
            key={product.id}
            id={product.id}
            category={product.category}
            description={product.description}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setQuantity(count);
    addItem(product, count);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>$ {product.price}</h2>

          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />

          {quantity > 0 && (
            <Link to="/cart"></Link>
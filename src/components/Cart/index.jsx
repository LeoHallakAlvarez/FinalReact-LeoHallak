import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import CartItem from "../CartItem/";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import "./cart.css";

const Cart = () => {
  const { cart, clear, getTotal } = useContext(CartContext);

  return (
    <div className={styles.carrito}>
      <h1>Carrito</h1>
      {cart.length !== 0 ? ( 
        <div className="container">
          <div className="row">
            {cart.map((e) => (
              <CartItem key={e.id} product={e} />
            ))}
            <div>{`Total Compra:  $ ${getTotal()}`}</div>
            <button className="botonRojo btn btn-danger" onClick={clear}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="botonVerde btn btn-success">
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 m-0 text-center">
          <button className="btn btn-primary" onClick={() => handleSubstract()}>
            -
          </button>
          <span className="mx-3">{count}</span>
          <button className="btn btn-primary" onClick={() => handleAdd()}>
            +
          </button>
        </div>
        <div className="col-12 col-md-6 m-0 text-cente"></div>
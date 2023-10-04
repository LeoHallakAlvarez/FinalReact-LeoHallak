import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../../db/firebase-config.js";
import Spinner from "react-bootstrap/Spinner";

import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async (categoria) => {
    try {
      setLoad(true);
      const document = categoria
        ? query(collection(db, "products"), where("category", "==", categoria))
        : collection(db, "products");
      const col = await getDocs(document);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProducts(result);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
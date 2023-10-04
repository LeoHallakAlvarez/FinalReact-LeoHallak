import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/index.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="container">
      <ItemDetail product={product} />
    </div>
  );
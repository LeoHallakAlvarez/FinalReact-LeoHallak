import { TiShoppingCart } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const Carrito = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <>
      {
        <Link
          to={"/cart"}
          style={{
            color: "white",
            border: "none",
            marginLeft: 16,
            marginRight: 24,
          }}
        >
          <TiShoppingCart size={40} />
          {getQuantity() > 0 && (
            <Badge pill bg="danger">
              {getQuantity()}
            </Badge>
          )}
        </Link>
      }
    </>
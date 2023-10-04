import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Checkout = () => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <strong>Muchas gracias!</strong>,
    html: <i>Disfruta de tu compra!</i>,
    icon: "success",
  });

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;

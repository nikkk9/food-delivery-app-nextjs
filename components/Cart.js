import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/cart-slice";
import { useState } from "react";
import PayModal from "./PayModal";
import axios from "axios";
import { useRouter } from "next/router";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [openBtn, setOpenBtn] = useState(false);
  const [cash, setCash] = useState(false);

  const router = useRouter();

  const createOrder = async (dataa) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/orders",
        dataa
      );
      console.log(data);
      dispatch(reset());
      router.push(`/order/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.cart}>
      {cart.products.map((item) => {
        return (
          <div className={classes.container} key={item._id}>
            <div className={classes.details}>
              <h3>Name</h3>
              <p>{item.title}</p>
            </div>
            <div className={classes.details}>
              <h3>Price</h3>
              <p>{item.price} INR</p>
            </div>
            <div className={classes.details}>
              <h3>Quantity</h3>
              <p>{item.quantity}</p>
            </div>
            <div className={classes.details}>
              <h3>Total</h3>
              <p>{item.price * item.quantity} INR</p>
            </div>
          </div>
        );
      })}

      {openBtn ? (
        <button className={classes.cashOnBtn} onClick={() => setCash(true)}>
          CASH ON DELIVERY
        </button>
      ) : (
        <button
          className={classes.checkoutBtn}
          onClick={() => setOpenBtn(true)}
        >
          CHECKOUT NOW!
        </button>
      )}

      {cash && <PayModal total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;

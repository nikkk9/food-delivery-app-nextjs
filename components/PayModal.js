import { useState } from "react";
import classes from "./PayModal.module.css";
const PayModal = ({ createOrder, total }) => {
  const [customer, setCustomer] = useState("");

  const handleOrder = () => {
    createOrder({ customer, total, method: 0 });
  };
  return (
    <div className={classes.paymodal}>
      <div className={classes.container}>
        <h2>You will pay 20 INR after delivery</h2>

        <div className={classes.inpContainer}>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <button onClick={handleOrder}>Order</button>
      </div>
    </div>
  );
};

export default PayModal;

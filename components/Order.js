import classes from "./Order.module.css";

const Order = ({ order }) => {
  return (
    <div className={classes.order}>
      <div className={classes.container}>
        <h1>Order Status</h1>
        <div className={classes.details}>
          <div className={classes.detail}>
            <p>Order ID:</p>
            <span>{order._id}</span>
          </div>
          <div className={classes.detail}>
            <p>Customer:</p>
            <span>{order.customer}</span>
          </div>
          <div className={classes.detail}>
            <p>Total:</p>
            <span>
              <b>{order.total}</b> INR
            </span>
          </div>
        </div>
        <p className={classes.paid}>PAID SUCCESSFULLY!</p>
      </div>
    </div>
  );
};

export default Order;

import classes from "./Featured.module.css";
import Image from "next/image";
import deliveryImg from "../public/images/a.png";
const Featured = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1>FOOD DELIVERY</h1>
          <button onClick={() => window.location.replace("/#foood")}>
            ORDER NOW
          </button>
        </div>
        <div className={classes.right}>
          <Image
            src={deliveryImg}
            height={400}
            width={400}
            className={classes.featuredImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;

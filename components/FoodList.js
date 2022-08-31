import classes from "./FoodList.module.css";
import Image from "next/image";
import Link from "next/link";
const FoodList = ({ food }) => {
  return (
    <>
      <Link href={`/product/${food._id}`}>
        <div className={classes.details}>
          <Image src={food.img} height={260} width={260} />
          <h2>{food.title}</h2>
          <p>
            <b>{food.prices[0]}</b> INR
          </p>
        </div>
      </Link>
    </>
  );
};

export default FoodList;

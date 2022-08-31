import Image from "next/image";
import { useState } from "react";
import classes from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart-slice";
const Product = ({ food }) => {
  const [price, setPrice] = useState(food.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const changePrice = (num) => {
    setPrice(price + num);
  };
  const handleSize = (sizeIdx) => {
    const diff = food.prices[sizeIdx] - food.prices[size];
    setSize(sizeIdx);
    changePrice(diff);
  };

  const handleCart = () => {
    dispatch(addProduct({ ...food, price, quantity }));
  };

  return (
    <div className={classes.product}>
      <div className={classes.left}>
        <Image src={food.img} width={350} height={350} />
      </div>

      <div className={classes.right}>
        <h1>{food.title}</h1>
        <p>
          <b>{food.prices[size]}</b> INR
        </p>
        <div className={classes.sizes}>
          <h3>Choose the size</h3>
          <div className={classes.size}>
            <span onClick={() => handleSize(0)}>Small</span>
            <span onClick={() => handleSize(1)}>Medium</span>
            <span onClick={() => handleSize(2)}>Large</span>
          </div>
        </div>
        <div className={classes.add}>
          <span>select quantity</span>
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button onClick={handleCart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

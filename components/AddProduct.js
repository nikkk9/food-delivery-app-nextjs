import { useState } from "react";
import classes from "./AddProduct.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const AddProduct = () => {
  const [title, setTitle] = useState(null);
  const [file, setFile] = useState(null);
  const [prices, setPrices] = useState([]);

  const router = useRouter();

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const addHandle = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload",
        data
      );
      //   console.log(uploadRes);
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        img: url,
        prices,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.addProduct}>
      <div className={classes.container}>
        <h1>Add a new Product</h1>
        <div className={classes.item}>
          <input
            className={classes.input}
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.item}>
          <input
            placeholder="image"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Prices</label>
          <div className={classes.priceContainer}>
            <input
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
          <button className={classes.addButton} onClick={addHandle}>
            ADD PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

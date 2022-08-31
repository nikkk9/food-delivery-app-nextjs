import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.PRODUCT || mongoose.model("PRODUCT", productSchema);

export default Product;

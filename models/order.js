import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.ORDER || mongoose.model("ORDER", orderSchema);

export default Order;

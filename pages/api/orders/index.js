import dbConnect from "../../../util/db";
import Order from "../../../models/order";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

export default handler;

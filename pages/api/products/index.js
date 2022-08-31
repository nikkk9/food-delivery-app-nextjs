import Product from "../../../models/product";
import dbConnect from "../../../util/db";
const TOKEN = process.env.TOKEN;

export default async function handler(req, res) {
  const { method, cookies } = req;
  const token = cookies.token;

  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  if (method === "POST") {
    if (!token || token !== TOKEN) {
      return res.status(400).json("not authorized!");
    }
    try {
      const products = await Product.create(req.body);
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

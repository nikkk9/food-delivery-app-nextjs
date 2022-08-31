import Product from "../../../models/product";
import dbConnect from "../../../util/db";
const TOKEN = process.env.TOKEN;

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const token = cookies.token;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  if (method === "PUT") {
    if (!token || token !== TOKEN) {
      return res.status(400).json("not authorized!");
    }
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  if (method === "DELETE") {
    if (!token || token !== TOKEN) {
      return res.status(400).json("not authorized!");
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("product has been deleted");
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

import Image from "next/image";
import { useState } from "react";
import classes from "./Admin.module.css";
import axios from "axios";
const Admin = ({ product, order }) => {
  const [productList, setProductList] = useState(product);

  const deleteHandle = async (id) => {
    try {
      await axios.delete("http://localhost:3000/api/products/" + id);

      setProductList(productList.filter((p) => p._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.admin}>
      <div className={classes.container}>
        <h1>Products</h1>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {productList.map((p) => {
            return (
              <tbody key={p._id}>
                <tr>
                  <td>{p._id}</td>
                  <td>{p.title}</td>
                  <td>
                    <Image src={p.img} width={50} height={50} />
                  </td>
                  <td>{p.prices[0]} INR</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => deleteHandle(p._id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className={classes.container}>
        <h1>Orders</h1>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
            </tr>
          </tbody>
          {order.map((o) => {
            return (
              <tbody key={o._id}>
                <tr>
                  <td>{o._id.slice(0, 7)}...</td>
                  <td>{o.customer}</td>
                  <td>{o.total} INR</td>
                  <td>
                    {o.method === 0 ? (
                      <span>Cash on delivery</span>
                    ) : (
                      <span>Paid</span>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Admin;

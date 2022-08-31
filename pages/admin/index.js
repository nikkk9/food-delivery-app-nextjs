import axios from "axios";
import Admin from "../../components/Admin";
const TOKEN = process.env.TOKEN;

const index = ({ products, orders }) => {
  return (
    <>
      <Admin product={products} order={orders} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== TOKEN) {
    return {
      redirect: {
        destination: "/admin/auth",
        permanent: false,
      },
    };
  }
  const productRes = await axios.get(`http://localhost:3000/api/products`);
  const orderRes = await axios.get(`http://localhost:3000/api/orders`);
  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  };
};

export default index;

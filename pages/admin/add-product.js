import AddProduct from "../../components/AddProduct";
const TOKEN = process.env.TOKEN;
import axios from "axios";

const addProduct = () => {
  return (
    <div>
      <AddProduct />
    </div>
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
  const { data } = await axios.get(`http://localhost:3000/api/products`);
  return {
    props: {
      products: data,
    },
  };
};

export default addProduct;

import axios from "axios";
import Product from "../../components/Product";

const product = ({ product }) => {
  return (
    <div>
      <Product food={product} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: data,
    },
  };
};

export default product;

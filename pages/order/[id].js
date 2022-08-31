import Order from "../../components/Order";
import axios from "axios";

const order = ({ order }) => {
  return (
    <div>
      <Order order={order} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/orders/${params.id}`
  );
  return {
    props: { order: data },
  };
};

export default order;

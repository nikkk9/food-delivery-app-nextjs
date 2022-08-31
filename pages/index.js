import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import Food from "../components/Food";

const index = ({ foodList }) => {
  return (
    <div>
      <Head>
        <title>Food delivery app</title>
      </Head>
      <Featured />
      <Food foodList={foodList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/products");
  // console.log(data);
  return {
    props: {
      foodList: data,
    },
  };
};
export default index;

import classes from "./Food.module.css";
import FoodList from "./FoodList";

const Food = ({ foodList }) => {
  return (
    <div className={classes.food} id="foood">
      <h1>ORDER YOU FAVOURITE FOOD</h1>
      <div className={classes.container}>
        {foodList.map((item) => {
          return <FoodList key={item._id} food={item} />;
        })}
      </div>
    </div>
  );
};

export default Food;

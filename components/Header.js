import Image from "next/image";
import classes from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { useSelector } from "react-redux";
const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={classes.header}>
      <div className={classes.items}>
        <Link href="/">
          <h2>FOOD-ZONE</h2>
        </Link>
      </div>
      <div className={classes.items}>
        <Link href="/admin">
          <span>ADMIN</span>
        </Link>
        <Link href="/admin/add-product">
          <span>ADD PRODUCT</span>
        </Link>
        <Link href="/cart">
          <div className={classes.cart}>
            <ShoppingCartOutlinedIcon className={classes.cartIcon} />
            <div className={classes.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

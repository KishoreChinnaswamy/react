import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const addItemHandler = (currentItem) => {
    dispatch(cartActions.addItemToCart(currentItem));
  };

  const removeItemHandler = (currentItemId) => {
    dispatch(cartActions.removeItemFromCart(currentItemId));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.name}</h3>
        <div className={classes.price}>
          ${item.totalPrice?.toFixed(2)}
          <span className={classes.itemprice}>
            (${item.price?.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItemHandler(item.id)}>-</button>
          <button onClick={() => addItemHandler(item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

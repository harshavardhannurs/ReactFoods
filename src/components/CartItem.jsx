import React, { Fragment, useContext} from "react";
import "./CartItem.css";
import CartContext from "../store/CartContext";

const CartItem = (props) => {

  const ctx = useContext(CartContext);

  function handleIncrement(){
    const item = {
      id:props.id,
      name:props.name,
      itemPrice:props.itemPrice
    }
    ctx.incrementItem(item);
  }

  function handleDecrement(){
    const item = {
      id:props.id,
      name:props.name,
      itemPrice:props.itemPrice
    }
    ctx.decrementItem(item);
  }

  return (
    <Fragment>
      <div className="cart-item">
        <div className="cart-name-price">
          <div className="cart-item-name">{props.name}</div>
          <span className="cart-item-price">₹{props.itemPrice}/kg  </span>
          <span className="cart-item-nos">  x{props.nosItems}</span>
        </div>
        <div className="total-item-price">
          <div>₹{props.totalPrice}</div>
          <div className="incr-decr-container">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default CartItem;

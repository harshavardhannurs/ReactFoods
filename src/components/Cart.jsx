import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <Modal>
      <h1 style={{color:'#439A97'}}>Your cart</h1>
      {props.cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            itemPrice={item.itemPrice}
            nosItems={item.nosItems}
            totalPrice={item.totalPrice}
          />
        );
      })}
    </Modal>
  );
};

export default Cart;

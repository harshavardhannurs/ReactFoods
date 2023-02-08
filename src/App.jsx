import React, { Fragment, useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import ListItems from "./components/ListItems";
import CartContext from "./store/CartContext";
import Cart from "./components/Cart";

const dummyItemsList = [
  {
    id: 0,
    name: "Strawberries",
    price: 320,
  },
  {
    id: 1,
    name: "Apples",
    price: 550,
  },
  {
    id: 2,
    name: "Tomato",
    price: 25,
  },
  {
    id: 3,
    name: "Broccoli",
    price: 180,
  },
];

function reducer(state, action) {
  const isPresent = state.cartItems.some((item) => {
    return action.payload.id === item.id;
  });
  const presentIndex = state.cartItems.findIndex((item) => {
    return action.payload.id === item.id;
  });
  console.log(isPresent, presentIndex);

  if (action.type === "ADD_ITEM") {
    if (isPresent) {
      const newUpdatedItem = {
        id: action.payload.id,
        name: action.payload.name,
        itemPrice: action.payload.itemPrice,
        totalPrice:
          +state.cartItems[presentIndex].totalPrice + action.payload.totalPrice,
        nosItems:
          +state.cartItems[presentIndex].nosItems + action.payload.nosItems,
      };
      state.cartItems[presentIndex] = newUpdatedItem;
      let checkoutPrice = state.cartItems.reduce((prev, curr) => {
        return prev + curr.totalPrice;
      }, 0);
      return { cartItems: state.cartItems, checkoutPrice: checkoutPrice };
    }
    //If not already present
    let cartItems = state.cartItems.concat([action.payload]);
    let checkoutPrice = state.cartItems.reduce((prev, curr) => {
      return prev + curr.totalPrice;
    }, action.payload.totalPrice);
    return { cartItems: cartItems, checkoutPrice: checkoutPrice };
  } else if (action.type === "INCR_ITEM") {

    const newUpdatedItem = {
      id: action.payload.id,
      name: action.payload.name,
      itemPrice: action.payload.itemPrice,
      totalPrice:
        +state.cartItems[presentIndex].totalPrice + action.payload.itemPrice,
      nosItems:
        +state.cartItems[presentIndex].nosItems + 1,
    };

    state.cartItems[presentIndex] = newUpdatedItem;
    let checkoutPrice = state.cartItems.reduce((prev, curr) => {
      return prev + curr.totalPrice;
    }, 0);
    return { cartItems: state.cartItems, checkoutPrice: checkoutPrice };

  } else if (action.type === "DECR_ITEM") {
    console.log("DECREMENT TRIGGERED")

    if(state.cartItems[presentIndex].nosItems === 1){
      state.cartItems.splice(presentIndex, 1);
      return {cartItems:state.cartItems, checkoutPrice:+state.checkoutPrice - action.payload.itemPrice}
    }

    const newUpdatedItem = {
      id: action.payload.id,
      name: action.payload.name,
      itemPrice: action.payload.itemPrice,
      totalPrice:
        +state.cartItems[presentIndex].totalPrice - action.payload.itemPrice,
      nosItems:
        +state.cartItems[presentIndex].nosItems - 1,
    };

    state.cartItems[presentIndex] = newUpdatedItem;
    let checkoutPrice = state.cartItems.reduce((prev, curr) => {
      return prev + curr.totalPrice;
    }, 0);
    return { cartItems: state.cartItems, checkoutPrice: checkoutPrice };
  }
}

const App = () => {
  const [cartState, dispatch] = useReducer(reducer, {
    cartItems: [],
    checkoutPrice: null,
  });
  const [showCart, setShowCart] = useState(false);

  function handleAddItem(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function incrementItem(item) {
    dispatch({ type: "INCR_ITEM", payload: item });
  }

  function decrementItem(item) {
    dispatch({ type: "DECR_ITEM", payload: item });
  }

  function handleShowCart() {
    setShowCart((prev) => {
      return !prev;
    });
  }

  return (
    <Fragment>
      <CartContext.Provider
        value={{
          handleAddItem: handleAddItem,
          handleShowCart: handleShowCart,
          checkoutPrice: cartState.checkoutPrice,
          cartItems: cartState.cartItems,
          incrementItem: incrementItem,
          decrementItem: decrementItem,
        }}
      >
        {showCart && <Cart cartItems={cartState.cartItems} />}
        <Navbar handleShowCart={handleShowCart} />
        <Description />
        <ListItems items={dummyItemsList} />
      </CartContext.Provider>
    </Fragment>
  );
};

export default App;

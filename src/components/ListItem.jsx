import React, { Fragment, useRef, useContext, useState, useEffect} from "react";
import "./ListItem.css";
import CartContext from "../store/CartContext";

const ListItem = (props) => {

  const ref = useRef();
  const ctx = useContext(CartContext);
  const [highlighted, setHighlighted] = useState(false)

  function handleSubmit(event){
    event.preventDefault();
    setHighlighted(true)
    setTimeout(()=>{
      setHighlighted(false)
    }, 30)
    const singleCartItem = {
      id:props.id,
      name:props.name,
      itemPrice:props.price,
      totalPrice: +ref.current.value * props.price,
      nosItems:+ref.current.value
    }
    ctx.handleAddItem(singleCartItem);
  }

  return (
    <Fragment>
      <div className="list-item-container">
        <div className="list-item">
          <p className="item-name">{props.name}</p>
          <p className="item-price">₹{props.price}/kg</p>
        </div>
        <div className="list-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nosItems">Amount :</label>
            <input
              type="number"
              id="nosItems"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
              className="nos-items"
              ref = {ref}
            />
            <button style={{backgroundColor:highlighted && 'rgb(160, 210, 254)'}} onClick={handleSubmit} className="add-item-btn">+</button>
          </form>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default ListItem;

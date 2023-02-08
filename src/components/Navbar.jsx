import React, {useState, useContext, useEffect} from "react";
import NavbarUI from "../UI/NavbarUI";
import CartContext from "../store/CartContext";
import './Navbar.css'

const Navbar = (props) => {
  const ctx = useContext(CartContext);
  const [highlighted, setHighlighted] = useState(false)

  function handleClick(){
    props.handleShowCart();
  }

  const labelNumber = ctx.cartItems.reduce((prev, curr)=>{
    return prev + curr.nosItems;
  }, 0)

  useEffect(()=>{

    setHighlighted(true)

    const animationDuration = setTimeout(()=>{
      setHighlighted(false)
    }, 300)
    return ()=>{
      clearTimeout(animationDuration)
    }
  }, [labelNumber]);

  return (
    <NavbarUI>
      <div className="brand-name">ReactFoods</div>
      <button className="cart" onClick={handleClick} disabled={!ctx.cartItems.length} style={{opacity: !ctx.cartItems.length && '0.5', animation: highlighted && "cart-btn-animation 200ms ease-out backwards" }}>
        <span className="cart-text">Cart</span>
        <span className="cart-label">{labelNumber}</span>
      </button>
    </NavbarUI>
  );
};

export default Navbar;

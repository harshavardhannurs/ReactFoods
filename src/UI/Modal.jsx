import React, {Fragment, useContext} from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import CartContext from '../store/CartContext'

const Backdrop = () =>{
  return <div className="backdrop" />
}

const CartContainer=(props) =>{
  const ctx = useContext(CartContext)

  function handleClick(){
    ctx.handleShowCart();
  }

  return <div className='cart-container'>
    {props.children}
    <div className="cart-footer">
      <div className='total-bill'>
        Total Price:{ctx.checkoutPrice}
      </div>
      <div className="cart-footer-btns">
        <button onClick={handleClick}>Close</button>
        <button>Proceed to checkout</button>
      </div>
    </div>
  </div>
}

const Modal = (props) =>{
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
    {ReactDOM.createPortal(<CartContainer>{props.children}</CartContainer>, document.getElementById('overlays'))}
  </Fragment>
}

export default Modal;
import React from 'react'

const CartContext = React.createContext({
  handleAddItem:()=>{},
  handleShowCart:()=>{},
  checkoutPrice:null,
  cartItems:[],
  incrementItem:()=>{},
  decrementItem:()=>{}
})

export default CartContext;
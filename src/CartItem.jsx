import React from 'react'

function CartItem({item,incQut,decQut}) {
  return (
    
            <li className='cartItem'>
                <img src={item.thumbnail} alt="" />
                <b class="itemTitle">{item.title}</b>
                <b class="itemPrice">Price:Rs.{item.price}</b>
                <div>
                    <button onClick={()=>{incQut(item)}}>+</button>
                    <b>{item.quantity}</b>
                    <button onClick={()=>{decQut(item)}}>-</button>
                </div>
                <b className='itemTotal'>Rs.{item.price*item.quantity}</b>
            </li>
  )
}

export default CartItem
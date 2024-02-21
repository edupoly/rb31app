import React from 'react'

function ProductsCart({cartItems}) {
  return (
    <div>
        <h1>ProductsCart</h1>
        <ul>
            {
                cartItems?.map((item)=>{
                    return <li>{item.title}</li>
                })
            }
        </ul>
        {
            cartItems.length==0 && <h1>Cart is Empty</h1>
        }
    </div>
  )
}

export default ProductsCart
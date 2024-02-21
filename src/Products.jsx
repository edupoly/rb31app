import axios from 'axios';
import React, { useEffect } from 'react'
import ProductsCart from './ProductsCart';

function Products() {
    var [products,setProducts]=React.useState([]);
    var [cartItems,setCartItems] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts([...res.data])
        })
    },[])
    function addToCart(product){
        if(product.quantity){
            product.quantity++;
        }
        else{
            product.quantity=1
            setCartItems([...cartItems,{...product}])
        }
    }
    useEffect(()=>{
        console.log(products)
    },[products])
  return (
    <div className='d-flex'>
        <div className='d-flex flex-wrap w-75 justify-content-around'>
            {
                products?.map((product)=>{
                    return (
                        <div class="card m-2" style={{width:'250px'}}>
                            <img src={product.image}  class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                                <button className='btn btn-success' onClick={()=>{addToCart(product)}}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='border border-dark w-25'>
            <ProductsCart cartItems={cartItems}></ProductsCart>
        </div>
    </div>
  )
}

export default Products
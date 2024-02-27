import React from 'react'
import axios from 'axios'
import CartItem from './CartItem';

function Cart() {
    var [items,setItems] = React.useState([]);
    var [isLoading,setLoading] = React.useState(null)
    React.useEffect(()=>{
        setLoading(true)
        axios.get("https://dummyjson.com/carts")
        .then((res)=>{
            console.log(res)
            setItems([...res.data.carts[0].products])
            setLoading(false)
        })
    },[])
    function incQut(item){
        var temp = [...items];
        temp = temp.map((titem)=>{
            if(titem.id==item.id){
                titem.quantity=titem.quantity+1;
            }
            return titem;
        })

        setItems([...temp])
    }
    function decQut(item){
        var temp = [...items];
        temp = temp.map((titem)=>{
            if(titem.id==item.id){
                titem.quantity=titem.quantity-1;
            }
            return titem;
        })

        setItems([...temp])
    }
  return (
    <div className='mybox cartblock'>
        <h1>Cart</h1>
        {
            isLoading && (<div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>)
        }
        <ul className='cartList'>
            {
                items?.map((item)=>{
                    return <CartItem item={item} incQut={incQut} decQut={decQut}></CartItem>
                })
            }
            <h1 className="cartTotal">Total:{items?.reduce((sum,item)=>{
                return sum+(item.quantity*item.price)
            },0)}</h1>
        </ul>
    </div>
  )
}

export default Cart
/*
    store
        state

        action
            type
            payload
        disptch method

        reducer functions

*/
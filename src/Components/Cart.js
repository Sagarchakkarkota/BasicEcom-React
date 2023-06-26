import React, { useEffect, useState } from 'react'

const Cart = (props) => {
    const[cartitem,setCartitem]=useState([])
useEffect(()=>{
setCartitem(props.cart)
},[props.cart])



  return (
    <div>
      <div className='container row my-3' >
        {cartitem.map((value,indexitem)=>{
       return <div  key={value.key} > 
        <img src={value.url} alt="" style={{width:"10%"}} />
        <span className='mx-2'>{value.name}</span>
        <button className='btn btn-warning' onClick={()=>{const CART=cartitem.map((item,index)=>{
            return index===indexitem?{...item, quantity: item.quantity>0? item.quantity-1:0}:item
        })

        setCartitem(CART)
        }}>-</button>
        <span className='mx-2'>{value.quantity}</span>
        <button className='btn btn-warning' onClick={()=>{const CART=cartitem.map((item,index)=>{
            return index===indexitem? {...item, quantity: item.quantity+1}:item
        })
        setCartitem(CART)
        }}>+</button>
        
        <span className='mx-2'>{value.price*value.quantity}</span>
  
       <i onClick={()=>{props.dlt(value.key)}} class="fa-solid fa-trash"></i>
        </div>

        })}

 <div className='container'>
    <span className='rounded bg-warning'>
    Total Rs {cartitem.map(value=>value.price*value.quantity).reduce((total,value)=> total+value,0)}
    </span>
    </div>      
      </div>
    </div>
  )
}

export default Cart

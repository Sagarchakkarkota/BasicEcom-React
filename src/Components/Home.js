import React,{ useContext, useEffect, useState } from 'react'
import Datacontext from '../context/createcontext'

const Home = (props) => {
const context=useContext(Datacontext)
const {data}=context


    return (
    <div className='container'>
        <div className='row '> 
   {data.map((value )=>{
    return <div className='col-md-4 my-3 rounded-3 ' key={value.key}>
        <div className="card" >
  <img src={value.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{value.name}</h5>
    <p className="card-text">{value.category}</p>
    <p className="card-text">Rs {value.price}</p>
<button className='btn btn-warning' onClick={()=>{props.handlecart(value)}} >Add to Cart</button>
  </div>
</div>
        </div>
   }
   )}
      </div>
    </div>
  )
}

export default Home

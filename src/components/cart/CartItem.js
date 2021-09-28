import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../../context'
export const CartItem = ({id,title,img,price,total,count}) => {
  const {increaseQty,decreaseQty,removeItem}=useGlobalContext();
  return (
  
    <div className="row my-1 text-capitalize my-2 text-center">
      <div className="text-align-center col-10 mx-auto col-lg-2">
        <img src={img} alt={title}className='img-fluid' style={{width:'5rem',height:'5rem'}} />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
          product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
          price: $ </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1"onClick={()=>decreaseQty(id)}>-</span>
            <span className="btn count mx-1">{count}</span>
            <span className="btn btn-black mx-1"onClick={()=>increaseQty(id)}>+</span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div onClick={()=>removeItem(id)} className="cart-icon">
          <FaTrash/>
        </div>
      </div>  
        
      <div className="col-10 mx-auto col-lg-2 my-lg-0">
        <strong>item total: $ {total}</strong>
      </div>
    </div>  
  )
}

import React from 'react'
import { CartItem } from './CartItem'
import { useGlobalContext } from '../../context'
import { ButtonContainer } from '../Button'
export const CartList = () => {
  const {cart}=useGlobalContext()
  
  return (
    <div className="container-fluid">
      {cart.map ((item)=>{
        return <CartItem key={item.id} {...item}/>
      })}

    </div>

      
   
  )
}

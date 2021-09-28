import React,{useEffect} from 'react'
import { Title } from '../Title'
import  {CartColumns} from './CartColumns'
import { EmptyCart } from './EmptyCart'
import { useGlobalContext } from '../../context'
import { CartList } from './CartList'
import {CartTotals} from './CartTotals'

export const Cart = () => {
  const {cart,getTotals}=useGlobalContext();
  
  useEffect(()=>{
    getTotals()
  },[cart])
  if (cart.length>0){
    return (
      <>
        <Title name='your' title='cart'/>
        <CartColumns/>
        <CartList/>
        <CartTotals/>
      </>
    )
  }else{
    return(
      <EmptyCart/>
    )
  }

}

// export default Cart;

import React, {  useEffect, useReducer } from 'react'
import { useContext } from 'react';
import {storeProducts, detailProduct} from './data'
import { Reducer } from './reducer';
const ProductContext=React.createContext();
const initialState={
  cart:[],
  products:[],
  details:detailProduct,
  modalOpen:false,
  modalProduct:detailProduct,
  cartSubTotal:0,
  cartTax:0,
  cartTotal:0,
}

export const AppProvider = ({children}) => {
  
  const [state,dispatch]=useReducer(Reducer,initialState);

  const setProducts = () => {
    dispatch ({type:'SET_PRODUCTS'});
  }
  
  
  const handleDetails=(id)=>{
    dispatch({type:'GET_DETAILS',payload:id})

  }

  const addToCart=(id)=>{
    dispatch ({type:'ADD_TO_CART',payload:id})
  }
  const removeItem=(id)=>{
    dispatch({type:'REMOVE_ITEM',payload:id})
  }
  const openModal=(id)=>{
    dispatch({type:'OPEN_MODAL',payload:id})
  }
  const closeModal=(id)=>{
    dispatch({type:'CLOSE_MODAL',payload:id})
  }
  const increaseQty=(id)=>{
    dispatch({type:'INCREASE_COUNT',payload:id})
  }
  const decreaseQty=(id)=>{
    dispatch({type:'DECREASE_COUNT',payload:id})
  } 
  useEffect(()=>{
    setProducts()
  },[...state.cart])
  
  const clearCart=()=>{
    dispatch({type:'CLEAR_CART'})
  }
  const getTotals=()=>{
    dispatch ({type:'GET_TOTALS'})
  }
  
  const itemTotal=(id)=>{
    dispatch ({type:'ITEM_TOTAL',payload:id})
  }
  return (
    <ProductContext.Provider 
    value={{
      ...state,
      handleDetails,
      addToCart,
      removeItem,
      openModal,
      closeModal,
      clearCart,
      increaseQty,
      decreaseQty,
      itemTotal,
      getTotals,
      setProducts
      
    }}
    >{children}
    </ProductContext.Provider>
  )
}

export const useGlobalContext=()=>{
  return useContext(ProductContext)
}
export default AppProvider;

// const setProducts=()=>{
  //   let tempProducts=[];
  //   storeProducts.forEach(item=>{
  //     const singleItem={...item}
  //     tempProducts=[...tempProducts,singleItem]
  //     return tempProducts;

  //   })
  //   // console.log(tempProducts)
  //   return {...state,products:tempProducts}
  // }
  // useEffect(()=>{
  //   setProducts()
  // })



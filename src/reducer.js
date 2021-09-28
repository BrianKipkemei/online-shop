import React from 'react'
import { useGlobalContext } from './context';
import { storeProducts } from './data';

export const Reducer = (state,action) => {
  if (action.type==='SET_PRODUCTS'){
    let productsAvailable = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      productsAvailable= [...productsAvailable, singleItem];
    });
    // console.log(productsAvailable)
    return {...state,products:productsAvailable}
  };
  
  


  if (action.type==='GET_DETAILS'){
    const product=state.products.find(product=>product.id===action.payload)
    return {...state,details:product};
    
  }


  if (action.type==='ADD_TO_CART'){
    let tempProducts=state.products;
    const item=tempProducts.find((product)=>{
      if (product.id===action.payload){
        return product
      }
      // console.log(item)

    })
    const index=tempProducts.indexOf(item)
    const product=tempProducts[index];
    // console.log(product.price)
    product.inCart=true;
    product.count=1;
    const price=product.price;
    product.total=price;

    return{...state,products:tempProducts,cart:[...state.cart,product]}

  }
  if (action.type==='REMOVE_ITEM'){
    const newCartProducts=state.cart.filter((product)=>product.id!==action.payload)
    
    let tempProducts=state.products;
    const item=tempProducts.find((product)=>{
      if (product.id===action.payload){
        return product
      }
    })
    const index=tempProducts.indexOf(item)
    const removedProduct=tempProducts[index];
    removedProduct.inCart=false;
    removedProduct.count=0;
    removedProduct.total=0;
    return {...state,cart:[...newCartProducts],
    products:[...tempProducts]}
  }

  if (action.type==='OPEN_MODAL'){
    const item=state.products.find((product)=>{
      if (product.id===action.payload){
        return product;
      }
    })
    return {...state,modalProduct:item,modalOpen:true}

  }
  if (action.type==='CLOSE_MODAL'){
    return {...state,modalOpen:false}
  }
  if (action.type==='DECREASE_COUNT'){

    let tempCart=[...state.cart];
    const selectedProduct=tempCart.find (item=>item.id===action.payload)
    const index=tempCart.indexOf(selectedProduct);
    const product=tempCart[index];
    product.count=product.count-1;
    if (product.count===0){
      product.count=1
    }
    else{
      product.total=product.count*product.price;
      return {...state,cart:[...tempCart]}
    }
    // let tempCart=state.cart.map((cartItem)=>{
    //   if (cartItem.id===action.payload){
    //     return {...cartItem,count:cartItem.count-1}
    //   }
    //   return cartItem
    // }).filter ((cartItem)=>cartItem.count!==0)
    // return {...state,cart:tempCart}
  }
  if (action.type==='INCREASE_COUNT'){

    let tempCart=[...state.cart]
    const selectedProduct=tempCart.find((cartItem)=>cartItem.id===action.payload)
    const index=tempCart.indexOf(selectedProduct);
    const product=tempCart[index];
    product.count=product.count+1;
    product.total=product.count*product.price;
    return {...state,cart:[...tempCart]}
  }
  if (action.type==='CLEAR_CART'){
    return {...state,cart:[]}
  }

  // if (action.type==='ITEM_TOTAL'){
  //   let tempCart=state.cart.map((cartItem)=>{
  //     if (cartItem.id===action.payload){
  //       const price=cartItem.price;
  //       const count=cartItem.count;
  //       const newTotal=price*count;
  //       return {...cartItem,total:newTotal}
  //     }
  //     return {...state,cart:tempCart}
  // })
// }
  if (action.type==='GET_TOTALS'){
    let subTotal=0;
    state.cart.map((item)=>(subTotal+=item.total))
    const tempTax=subTotal*0.125;
    const tax=parseFloat(tempTax.toFixed())
    const total=subTotal+tax;
    return {...state,cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total,}
  }
  

  return state;
}

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { FaCartPlus } from 'react-icons/fa'
import PropTypes from 'prop-types';
import {IoBagRemove} from 'react-icons/io5'

export const Product = ({id,title,img,price,inCart}) => {
  const {handleDetails,addToCart,openModal}=useGlobalContext()
  return (
    <ProductWrapper className='col-9 col-md-6 col-lg-3 my-3'>
      <div className="card" onClick={()=>handleDetails(id)}>
        <div className="img-container p-5">
          <Link to='/details'>
            <img  src={img} alt={title}className='card-img-top' />
          </Link>
          <button 
          onClick={()=>addToCart(id)}
          onClick={()=>openModal(id)}
          className="cart-btn"
            disabled={inCart?true:false}>
              {inCart?(<p className='text-capitalize mb-0'disabled>{" "}In Cart</p>):<FaCartPlus/>}
          </button>
          {/* <button className="remove-btn">
            {inCart?<IoBagRemove/>:<p>Wishlist+</p>}

          </button> */}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">
            {title}
          </p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>

    </ProductWrapper>
    
  )
}


// proptypes

Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}
const ProductWrapper=styled.div`
  .card{
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover{
    .card{
      border: 0ch.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
      background: rgba(247,247,247);
    }
  }
  .img-container{
    position: relative;
    overflow: hidden;

  }
  .card-img-top{
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.1);
  }
  .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding:0.2rem 0.5rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    border-radius: 0.4rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;
  }
  .cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
  }
  .img-container:hover .cart-btn{
    transform: translate(0,0);
  }
  .img-container:hover .remove-btn{
    transform: translate(0,0);
  }
  /* .remove-btn{
    position: absolute;
    bottom: 15%;
    right: 0;
    padding:0;
    background:orangered;
    border: none;
    color: var(--mainWhite);
    border-radius: 0.4rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;
  }
  .none{
    visibility: hidden;
    display: none;
    color: transparent;

  } */

`

// export default Product

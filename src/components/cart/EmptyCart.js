import React from 'react'
import { ButtonContainer } from '../Button'
import { Link } from 'react-router-dom'
export const EmptyCart = () => {
  return (
    <div className="container mt-5">

      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1 className='mb-40'>YOUR CART IS CURRENTLY EMPTY</h1>
          <Link to='/'>
            <ButtonContainer>Go to products</ButtonContainer>
          </Link>

        </div>
      </div>
    </div>
  )
}

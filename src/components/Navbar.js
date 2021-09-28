import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import {FaShoppingCart} from 'react-icons/fa'
import { ButtonContainer } from './Button'
import styled from 'styled-components'
export const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-lg navbar-light px-sm-5">
      <Link to='/'>
        <img src={logo} alt="logo" className='navbar-brand'/>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-link ml-5">
          <Link to='/'> our products</Link>
        </li>
      </ul>
      <Link to='/cart' >
        <ButtonContainer className="ml-auto">
          <FaShoppingCart className='mr-2 pr-3'/>
          My cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  )
}
const NavWrapper=styled.nav`
background: var(--mainBlue);
justify-content: space-between;
.nav-link{
  color: var(--mainWhite)!important;
  font-size: 1.3rem;
  text-transform: capitalize;
  text-decoration: none;
}
`



// export default Navbar

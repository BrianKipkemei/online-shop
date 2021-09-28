import styled from 'styled-components'


export const ButtonContainer=styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var (--LightBlue);
border-color: ${props=>props.cart?'var--mainYellow':'var(--lightBlue)'};
color :${prop=>prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
padding:0.2rem 0.5rem;
cursor: pointer;
border-radius: 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 1s linear;
background: ${props=>props.login?'orangered':'transparent'};
&:hover{
  background: ${prop=>prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
  color: var(--mainWhite);
  background: ${prop=>prop.login?'var(--mainYellow)':'var(--lightBlue)'};
  color: var(--mainWhite);
}
&:focus{
  outline: none;
}
`
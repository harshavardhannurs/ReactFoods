import styled, {keyframes} from 'styled-components'

const NavbarUI = styled.div`
background-color :#439A97;
display:flex;
justify-content:space-between;
padding:1rem;
border-bottom:1pt solid #439A97;

& .brand-name{
  font-size:2rem;
  color:aliceblue;
}

& .cart{
  border:2px solid aliceblue;
  border-radius:12px;
  background-color:#439A97;
  color:aliceblue;
  display:flex;
  justify-content:center;
  align-items:center;
}

& .cart:hover{
  background-color:#AEE2FF;
  cursor:pointer;
  color:#439A97;
  border:2px solid #439A97;
}

& .cart .cart-label{
  background-color:aliceblue;
  border-radius:50%;
  padding:2px 6px;
  margin:0 0 0 7px;
  font-size:0.9rem;
  color:#439A97;
}

& .cart .cart-text{
  font-size:1.1rem;
}


`

export default NavbarUI
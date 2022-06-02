import styled from 'styled-components'

const CartContainer = styled.div`
  margin: 130px auto;
  width: 80%;
`
  
const CartItem = styled.div`
  padding: 20px 30px;
  margin-top: 16px;
  border: solid 1px #979797;
`

const Shipment = styled.div`
  width: 100%;
  height: 80px;
  margin: 20px 0;
  padding:20px;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
`

const ShipmentSelect = styled.select`
  width: 150px;
  height: 30px;
  margin: 0 20px;
  padding-left: 15px;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: #f3f3f3;
`
 
const CartForm = styled.form`
  margin: 50px 0;
  border-bottom: 1px solid #3f3a3a;
  padding-bottom:30px;
`


const FormBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const FormText = styled.div`
  display:inline-block;
  width:100px;
`

const FormInput = styled.input`
  width: 574px;
  height: 30px;
  border-radius: 8px;
  border: solid 1px #979797;
  margin-left: 30px;
`
  


const FormRadio = styled.div`
  margin-left:30px;
`

const Amount = styled.div`
  margin: 30px 0 30px auto;
  display: flex;
  align-items: center;
  width: 240px;
`

const Dollar = styled.div`
  margin-left: auto;
  font-size:20px;
`

const Tappay =styled.div`
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255,255,255,0);
  line-height: 1.21428571em;
  padding: .578571em 1em;
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  box-shadow: 0 0 0 0 transparent inset;
  -webkit-transition: color .1s ease,border-color .1s ease;
  transition: color .1s ease,border-color .1s ease;
  width: 50%;

`


const CartButton = styled.button`
  width: 250px;
  height: 50px;
  margin: 50px 0;
  background-color: black;
  color: white;
  font-size: 20px;
  letter-spacing: 4px;
  margin-left: auto;
  display: block;
`

export const CartItemQuantity= styled.select`
  width: 70px;
  height: 30px;
  padding-left: 13px;
  border-radius: 5px;
  border: solid 1px #979797;
`



const CartItemContainer = styled.div`
  display:flex;
  flex-direction:row;
  margin:30px 20px 30px 10px;
  justify-content:space-between;
`

export const CartItemIntro = styled.div`
  display:flex;
  flex-direction:row;
`

const CartItemContent = styled.div`
  width:160px;
  display:flex;
  flex-direction:column;
  padding:0 20px;
`

const CartItemPic = styled.img`
  width:130px;
`
  
const CartItemColor = styled.div`
  width: 1rem;
  height: 1rem;
  margin-left:5px;
  padding: 0.5rem 0rem;
  display:inline-block;
`

export const CartItemPrice = styled.div`
  display:flex;
  justify-content:flex-end;

`

export const CartText = styled.div`
  font-size:1.1rem;
`




export {CartContainer, CartItem, Shipment, ShipmentSelect, CartForm, FormBlock, FormInput, FormText, FormRadio, Amount, Dollar, CartButton, Tappay, CartItemContent, CartItemPic, CartItemContainer, CartItemColor };
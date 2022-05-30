import styled from 'styled-components'

const CartContainer = styled.div`
  margin: 130px auto;
  width: 80%;
`
  
const CartItem = styled.div`
  padding: 40px 30px;
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

  
  export {CartContainer, CartItem, Shipment, ShipmentSelect, CartForm, FormBlock, FormInput, FormText, FormRadio, Amount, Dollar, CartButton };
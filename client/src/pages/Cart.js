/* eslint-disable */
import React,{useState, useEffect} from 'react'
import Header from '../components/Header'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {FiTrash2} from 'react-icons/fi' 
import { removedata } from '../cartSlice'
import {cleardata} from '../cartSlice'
import {CartContainer,CartItem,Shipment,ShipmentSelect, CartForm, FormBlock, FormInput, FormText, FormRadio, Amount, Dollar, CartButton, Tappay, CartItemContent, CartItemPic, CartItemContainer, CartItemColor,CartItemPrice, CartItemIntro, CartText, CartItemQuantity } from '../styles/cart'
import '../styles/home.css'
import { diskStorage } from 'multer';

const Cart = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState();
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  let navigate = useNavigate()

  const defaultCardViewStyle = {
    color: 'rgb(0,0,0)',
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '300',
    errorColor: 'red',
    placeholderColor: ''
}

  const config = { 
      isUsedCcv: true
  }

  useEffect(()=>{
    TPDirect.setupSDK(124425, 'app_9oZvJ229M8RaaHq0MqGSZuKMFLejLLOvGevvj9XDwm93scFeH11smAfwu9Jp', 'sandbox')
    TPDirect.card.setup('#tappay', defaultCardViewStyle, config);
  },[])


  function getPrime() {
      TPDirect.card.getPrime(function (result) {
          if (result.status !== 0) {
              alert('信用卡填寫錯誤')
              event.preventDefault()
              return
          }
          alert('付款成功')
          const prime = result.card.prime
          dispatch(cleardata())
          navigate('/thankyou')
      })
  }

  const submitOrder = () =>{
    if((name&&email&&phone&&address&&time)===''){
      alert('請填寫完整訂購資料')
      event.preventDefault()
    }
    getPrime()
  }


  let total=0

  if(cart.length>0){
    total = cart.map((data)=>data.price*data.quantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    });
  }


  return (
    <>
    <Header/>
    <CartContainer>
      <CartItem>
        {cart.map((data,index)=>
        <>
          <CartItemContainer>
          <CartItemIntro>
          <CartItemPic src= {`http://localhost:3000/static/${data.pic}`}/>
          <CartItemContent>
          <p>{data.title}</p>
          <p>{data.number}</p>
          <p style={{alignItems: 'center', display: 'flex'}}>顏色 | <CartItemColor style={{ backgroundColor: data.color }}/></p>
          <p>尺寸 | {data.size}</p>
          </CartItemContent>
          </CartItemIntro>
          <CartItemQuantity value={data.quantity}>

            <option key={data.quantity}>{data.quantity}</option>
          </CartItemQuantity>
          <CartText>{data.price}</CartText>
          <CartText>{data.price*data.quantity}</CartText>
          <FiTrash2 style={{fontSize:'20px',marginTop:'1px',cursor:'pointer'}} onClick={()=>dispatch(removedata(index))}/>
          </CartItemContainer>
        </>)}
      </CartItem>
      <Shipment>
        <div>配送國家</div>
        <ShipmentSelect>
          <option value="taiwan">臺灣及離島</option>
        </ShipmentSelect>
        <div>付款方式</div>
        <ShipmentSelect>
          <option value="credit_card">信用卡付款</option>
        </ShipmentSelect>
      </Shipment>
      ※ 提醒您：
      <br />● 選擇宅配-請填寫正確收件人資訊，避免包裹配送不達
      <br />● 選擇超商-請填寫正確收件人姓名(與證件相符)，避免無法領取
      <CartForm>
      <h5>訂購資料</h5>
      <FormBlock>
        <FormText>收件人姓名</FormText>
        <FormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormBlock>
      <FormBlock>
        <FormText>Email</FormText>
        <FormInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormBlock>
      <FormBlock>
        <FormText>手機</FormText>
        <FormInput
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormBlock>
      <FormBlock>
        <FormText>地址</FormText>
        <FormInput
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </FormBlock>
      <FormBlock>
        <FormText>配送時間</FormText>
        <FormRadio id="delivery">
          <label>
            <input
              type="radio"
              checked={time === 'morning'}
              onChange={(e) => { if(e.target.checked){ setTime('morning')}}}
            />
            08:00-12:00
          </label>
          <label style={{marginLeft:'20px'}}>
            <input
              type="radio"
              checked={time === 'afternoon'}
              onChange={(e) => { if (e.target.checked) setTime('afternoon')}}
            />
            14:00-18:00
          </label>
          <label style={{marginLeft:'20px'}}>
            <input
              type="radio"
              checked={time === 'any'}
              onChange={(e) => { if (e.target.checked) setTime('any');}}
            />
            不指定
          </label>
        </FormRadio>
      </FormBlock>
    </CartForm>
    <CartForm>
      <h5>付款資料</h5>
      <FormBlock>
        <FormText>信用卡</FormText>
        <Tappay id="tappay" style={{marginLeft:'30px'}}/>
      </FormBlock>
    </CartForm>
    <Amount>
      <div>總金額</div>
      <Dollar>NT. {total}</Dollar>
    </Amount>
    <Amount  style={{borderBottom: '1px solid #3f3a3a', paddingBottom: '20px'}}>
      <div>運費</div>
      <Dollar>NT. 30</Dollar>
    </Amount>
    <Amount>
      <div>應付金額</div>
      <Dollar>NT. {total+30}</Dollar>
    </Amount>
    <CartButton onClick={()=>submitOrder()}>
      確認付款
    </CartButton>
  </CartContainer>
  </>
  )
}

export default Cart
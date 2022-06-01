import React,{useState, useEffect} from 'react'
import Header from '../components/Header'
import {CartContainer,CartItem,Shipment,ShipmentSelect, CartForm, FormBlock, FormInput, FormText, FormRadio, Amount, Dollar, CartButton, Tappay } from '../styles/cart'

const Cart = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState();

  const defaultCardViewStyle = {
    color: 'rgb(0,0,0)',
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: '300',
    errorColor: 'red',
    placeholderColor: ''
}

  const config = { 
      isUsedCcv: true
  }

  // TPDirect.setupSDK(124425, 'app_9oZvJ229M8RaaHq0MqGSZuKMFLejLLOvGevvj9XDwm93scFeH11smAfwu9Jp', 'sandbox')
  // TPDirect.card.setup('#tappay', defaultCardViewStyle, config);

  // function onClick() {
  //     TPDirect.card.getPrime(function (result) {
  //         if (result.status !== 0) {
  //             alert('getPrime 錯誤');
  //             return
  //         }
  //         alert('getPrime 成功');
  //         const prime = result.card.prime;

  //     })
  // }


  return (
    <>
    <Header/>
    <CartContainer>
      <CartItem>
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
        />
      </FormBlock>
      <FormBlock>
        <FormText>配送時間</FormText>
        <FormRadio id="delivery">
          <label>
            <input
              type="radio"
              checked={time === 'morning'}
              onChange={(e) => {  if (e.target.checked) setTime('morning')}}
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
      <Tappay id="tappay"/>
    </CartForm>
    <Amount>
      <div>總金額</div>
      <Dollar>NT.</Dollar>
    </Amount>
    <Amount  style={{borderBottom: '1px solid #3f3a3a', paddingBottom: '20px'}}>
      <div>運費</div>
      <Dollar>NT.</Dollar>
    </Amount>
    <Amount>
      <div>應付金額</div>
      <Dollar>NT.</Dollar>
    </Amount>
    <CartButton>
      確認付款
    </CartButton>
  </CartContainer>
  </>
  )
}

export default Cart
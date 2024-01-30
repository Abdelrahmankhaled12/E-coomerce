import { MDBInput } from 'mdb-react-ui-kit';
import SelectGovernorates from './SelectGovernorates'
import CardMethod from '../card/CardMethod';
import { useState } from 'react';
import './style.scss'

const FormCheckOut = () => {

  const [governorate, setGovernorate] = useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  return (
    <div className='formCheck'>
      <form action="">
        <h3>Contact</h3>
        <MDBInput
          label='Email or mobile Phone number'
          id='emailOrphone'
          type='text'
          className={emailOrPhone === "" ? "empty" : ""}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          value={emailOrPhone}
          required
        />
        <h3>Delivery</h3>
        <div className="gridInputsTwo">
          <MDBInput
            label='First name'
            id='firstName'
            type='text'
            className={firstName === "" ? "empty" : ""}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <MDBInput
            label='Last name'
            id='lastName'
            type='text'
            className={lastName === "" ? "empty" : ""}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <MDBInput
          label='Address'
          id='address'
          type='text'
          className={address === "" ? "empty" : ""}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <MDBInput
          label='Phone'
          id='phone'
          type='text'
          className={phone === "" ? "empty" : ""}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
          style={{ "marginTop": "15px" }}
        />
        <div className="gridInputsThree">
          <MDBInput
            label='City'
            id='city'
            type='text'
            className={phone === "" ? "empty" : ""}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
          <SelectGovernorates setSelected={(value) => setGovernorate(value)} />
          <MDBInput
            label='Postal code'
            id='postalCode'
            type='text'
            className={phone === "" ? "empty" : ""}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <CardMethod />
        <button className='payNow' type='sumbit'>Pay Now </button>
      </form>
    </div>
  )
}

export default FormCheckOut
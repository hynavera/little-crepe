import React, {useState, useEffect} from 'react'
import './Info.css'


const PayInfo = () => {
  const [contact, setContact] = useState (
    {name: '', phone: '', address: ''}
  );

  function handleChange(e) {
    const {name, value} = e.target;
    setContact(prev => (
      {...prev, [name]: value}
    ))
    e.preventDefault();
    const customerData = {
      name: contact.name,
      phone: contact.phone,
      address: contact.address
    }
    sessionStorage.setItem("dataCustomer",JSON.stringify(customerData))
  }

  const [totalAmountData, setTotalAmountData] = useState(null);
  useEffect(() => {
    const storedAmountData = sessionStorage.getItem("totalAmount");
    if (storedAmountData) {
      setTotalAmountData(JSON.parse(storedAmountData));
    }
  }, [])
  

  return (
    <div className='order-wide'>
      <section className="crepe-layout">
        <div className="crepe-type">
          <div className="row">
            <div className="col l-12 p-4">
              <h3>Contact Info</h3>
            </div>
          </div>
        <div className="info-layout">
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label htmlFor="name">Name</label>
            </div>
            <div className="col l-6 p-4">
              <input type="text" name='name' placeholder='Full name' 
              value={contact.name} onChange={handleChange}/>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label htmlFor="phone">Phone number</label>
            </div>
            <div className="col l-6 p-4">
              <input type="phone" name='phone' placeholder='Your mobile phone number' 
              value={contact.phone} onChange={handleChange}/>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label htmlFor="address">Address</label>
            </div>
            <div className="col l-6 p-4">
              <textarea type="text" name='address' placeholder='Please specify your address' 
              value={contact.address} onChange={handleChange}/>
            </div>
          </div>
        </div>
        </div>

        <div className="col l-12"><hr /></div>

        <div className="crepe-type">
          <div className="row">
            <div className="col l-12 p-4">
              <h3>Checkout</h3>
            </div>
          </div>
        <div className="info-layout">
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Total amount</label>
            </div>
            <div className="col l-6 p-4">
              <div className="input inputset">{totalAmountData?.totalCost}</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Shipping fee</label>
            </div>
            <div className="col l-6 p-4">
              <div className="input">Calculating...</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Tax</label>
            </div>
            <div className="col l-6 p-4">
            <div className="input">Calculating...</div>
            </div>
          </div>
        </div>
        </div>

        <div className="col l-12"><hr /></div>

        <div className="crepe-type">
          <div className="row">
            <div className="col l-12 p-4">
              <h3>Your Payment</h3>
            </div>
          </div>
        <div className="info-layout">
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Card name</label>
            </div>
            <div className="col l-6 p-4">
              <input placeholder='We accept VISA, MasterCard, NAPAS' />
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Card number</label>
            </div>
            <div className="col l-6 p-4">
              <input placeholder='XXXX XXXX XXXX XXXX'/>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Expiration</label>
            </div>
            <div className="col l-6 p-4">
              <input placeholder='MM / YY'/>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >CVV</label>
            </div>
            <div className="col l-6 p-4">
              <input placeholder='XXX'/>
            </div>
          </div>
        </div>
        </div>

      </section>
    </div>
  )
}

export default PayInfo
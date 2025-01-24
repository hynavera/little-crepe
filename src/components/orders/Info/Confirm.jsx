import React from 'react'
import { useState, useEffect } from 'react';

const Confirm = () => {
  const [userData, setUserData] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("dataCustomer");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); 
  }, [])

  const [totalAmountData, setTotalAmountData] = useState(null);
  useEffect(() => {
    const storedAmountData = sessionStorage.getItem("totalAmount");
    if (storedAmountData) {
      setTotalAmountData(JSON.parse(storedAmountData));
    }
  }, [])

  const setTotalPay = () => {
    let total = 0;
    if (totalAmountData && totalAmountData.totalCost !== undefined) { 
      total = totalAmountData.totalCost + 20; 
    }
    return total; 
  }

  return (
    <div className='order-wide'>
      <section className="crepe-layout">
        <div className="crepe-type">
        <div className="info-layout">
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Receiver</label>
            </div>
            <div className="col l-6 p-4">
              <div className="input inputset">{userData?.name}</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Contact</label>
            </div>
            <div className="col l-6 p-4">
              <div className="input inputset">{userData?.phone}</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Shipping area</label>
            </div>
            <div className="col l-6 p-4">
            <div className="input inputset">{userData?.address}</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Total</label>
            </div>
            <div className="col l-6 p-4">
            <div className="input inputset">{setTotalPay()}</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Order time</label>
            </div>
            <div className="col l-6 p-4">
            <div className="input">{time.toLocaleString()}</div>
            </div>
          </div>
          <div className="row info-input">
            <div className="col l-2 p-4">
              <label >Delivery time</label>
            </div>
            <div className="col l-6 p-4">
            <div className="input">30 - 60 minutes</div>
            </div>
          </div>

        </div>
        </div>
      </section>
      
    </div>
  )
}

export default Confirm
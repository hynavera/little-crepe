import React from 'react'
import map from "../../../assets/map.png"
import mapIcon from "../../../assets/map.svg"

const Status = () => {
  return (
    <div className='order-wide'>
      <div className="row">
        <div className="col l-12 sta-head">
          <h1>Felicitations!</h1>
          <h4>Order no. #Q00016</h4>
        </div>
        <div className="col l-0-1 l-10 sta-mid">
          <p className="p1">(Get ready to packing!)</p>
          <div className="sta-stamap">
            <div className='sta-map'>
              <img src={map} alt="" />
            </div>
            <div className="sta-nav">
              <div className="row">
                <img src={mapIcon} alt="" />
                <div>Preparing...</div>
              </div>
            </div>
          </div>
          <p className='sta-help'>If you get any problems, please contact us <span>here</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default Status
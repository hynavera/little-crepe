import React from 'react'
import { APIProvider } from "@vis.gl/react-google-maps";
import CustomMap from '../landing/CustomMap';

const Contact = () => {
  return (
      <section className="wide">
        <div className="row">
          <div className="col l-0-2 l-8 p-4">
            <h3>VISIT US</h3>
            <p className='p0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="map">
              <APIProvider apiKey={'AIzaSyDTBdN8scOp2wngX5Eim0IbtpzYHgIUABY'} onLoad={() => console.log('Maps API has loaded.')}>
                <CustomMap />
              </APIProvider>
              <button id='map-btn'>Get Directions</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
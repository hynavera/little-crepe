import React, { useState } from "react";
import { Map, Marker} from "@vis.gl/react-google-maps";

const CustomMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 21.048928962107464, lng: 105.86452406236624
  });

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "8px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map>
    </div>
  );
}

export default CustomMap;


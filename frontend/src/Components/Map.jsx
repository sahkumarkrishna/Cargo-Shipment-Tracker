
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ currentLocation, route }) => {
  return (
    <MapContainer
      center={currentLocation.coordinates}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={currentLocation.coordinates}>
        <Popup>Current Location</Popup>
      </Marker>
      {route.map((loc, index) => (
        <Marker key={index} position={loc.location.coordinates}>
          <Popup>Route Point {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

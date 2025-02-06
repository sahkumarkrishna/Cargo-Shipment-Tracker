import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../Components/Map"

const Shipment = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    const fetchShipment = async () => {
      const response = await fetch(`http://localhost:5000/api/shipment/${id}`);
      const data = await response.json();
      setShipment(data);
    };

    fetchShipment();
  }, [id]);

  if (!shipment) return <div>Loading...</div>;

  return (
    <div>
      <h1>Shipment Details</h1>
      <p>Shipment ID: {shipment.shipmentId}</p>
      <p>Container ID: {shipment.containerId}</p>
      <p>Current Location: {JSON.stringify(shipment.currentLocation)}</p>
      <p>Current ETA: {new Date(shipment.currentETA).toLocaleString()}</p>
      <Map currentLocation={shipment.currentLocation} route={shipment.route} />
    </div>
  );
};

export default Shipment;

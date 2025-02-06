
import { Link } from "react-router-dom";

const ShipmentList = ({ shipments }) => {
  return (
    <div>
      <h2>Shipments</h2>
      <table>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Container ID</th>
            <th>Current Location</th>
            <th>ETA</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment._id}>
              <td>
                <Link to={`/shipment/${shipment.shipmentId}`}>
                  {shipment.shipmentId}
                </Link>
              </td>
              <td>{shipment.containerId}</td>
              <td>{JSON.stringify(shipment.currentLocation)}</td>
              <td>{new Date(shipment.currentETA).toLocaleString()}</td>
              <td>{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentList;

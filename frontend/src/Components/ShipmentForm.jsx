import { useState } from "react";
import { useDispatch } from "react-redux";
import { createShipment } from "../redux/actions/shipmentActions";

const ShipmentForm = () => {
  const dispatch = useDispatch();
  const [shipmentId, setShipmentId] = useState("");
  const [containerId, setContainerId] = useState("");
  const [route, setRoute] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentETA, setCurrentETA] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      // Check if route and currentLocation are not empty
      if (!route || !currentLocation) {
        throw new Error("Route and Current Location cannot be empty.");
      }

      // Parse the JSON inputs
      const parsedRoute = JSON.parse(route);
      const parsedCurrentLocation = JSON.parse(currentLocation);

      // Validate currentETA
      if (!currentETA) {
        throw new Error("Current ETA cannot be empty.");
      }

      // Dispatch the createShipment action
      dispatch(
        createShipment({
          shipmentId,
          containerId,
          route: parsedRoute,
          currentLocation: parsedCurrentLocation,
          currentETA,
        })
      );

      // Clear the form fields after submission
      setShipmentId("");
      setContainerId("");
      setRoute("");
      setCurrentLocation("");
      setCurrentETA("");
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Shipment</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      <input
        type="text"
        placeholder="Shipment ID"
        value={shipmentId}
        onChange={(e) => setShipmentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Container ID"
        value={containerId}
        onChange={(e) => setContainerId(e.target.value)}
      />
      <textarea
        placeholder='Route (e.g., [{"location": {"type": "Point", "coordinates": [-73.935242, 40.730610]}}])'
        value={route}
        onChange={(e) => setRoute(e.target.value)}
      />
      <textarea
        placeholder='Current Location (e.g., {"type": "Point", "coordinates": [-73.935242, 40.730610]})'
        value={currentLocation}
        onChange={(e) => setCurrentLocation(e.target.value)}
      />
      <input
        type="datetime-local"
        value={currentETA}
        onChange={(e) => setCurrentETA(e.target.value)}
      />
      <button type="submit">Add Shipment</button>
    </form>
  );
};

export default ShipmentForm;

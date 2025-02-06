const API_URL = "http://localhost:5000/api";

export const fetchShipments = async () => {
  const response = await fetch(`${API_URL}/shipments`);
  return response.json();
};

export const createShipment = async (shipmentData) => {
  const response = await fetch(`${API_URL}/shipment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shipmentData),
  });
  return response.json();
};

export const fetchShipmentById = async (id) => {
  const response = await fetch(`${API_URL}/shipment/${id}`);
  return response.json();
};

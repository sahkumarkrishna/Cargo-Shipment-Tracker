import { FETCH_SHIPMENTS, CREATE_SHIPMENT } from "./types"

export const fetchShipments = () => async (dispatch) => {
  const response = await fetch("http://localhost:5000/api/shipments");
  const data = await response.json();
  dispatch({ type: FETCH_SHIPMENTS, payload: data });
};

export const createShipment = (shipmentData) => async (dispatch) => {
  const response = await fetch("http://localhost:5000/api/shipment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shipmentData),
  });

  const data = await response.json();
  dispatch({ type: CREATE_SHIPMENT, payload: data });
};

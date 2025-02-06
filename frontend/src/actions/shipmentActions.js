import axios from "axios";

export const FETCH_SHIPMENTS = "FETCH_SHIPMENTS";
export const ADD_SHIPMENT = "ADD_SHIPMENT";
export const UPDATE_SHIPMENT_LOCATION = "UPDATE_SHIPMENT_LOCATION";

export const fetchShipments = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/shipments`
    );
    dispatch({ type: FETCH_SHIPMENTS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const addShipment = (shipmentData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/shipment`,
      shipmentData
    );
    dispatch({ type: ADD_SHIPMENT, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const updateShipmentLocation =
  (id, locationData) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/shipment/${id}/update-location`,
        locationData
      );
      dispatch({ type: UPDATE_SHIPMENT_LOCATION, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };

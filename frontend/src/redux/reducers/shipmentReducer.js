import { CREATE_SHIPMENT } from "../actions/types";

const initialState = [];

const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHIPMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default shipmentReducer;

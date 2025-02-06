import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./redux/store"; // Import your Redux store
import App from "./App"; // Import your main App component
import "./index.css"
// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

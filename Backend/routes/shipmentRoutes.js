const express = require("express");
const router = express.Router();
const shipmentController = require("../controllers/shipmentController");

// Define routes
router.get("/shipments", shipmentController.getAllShipments); // Retrieve all shipments
router.get("/shipment/:shipmentId", shipmentController.getShipmentById); // Retrieve a specific shipment by shipmentId
router.post("/shipment", shipmentController.createShipment); // Create a new shipment
router.post(
  "/shipment/:shipmentId/update-location",
  shipmentController.updateLocation
); // Update the current location of a shipment
router.get("/shipment/:shipmentId/eta", shipmentController.getETA); // Get ETA for a specific shipment

module.exports = router;

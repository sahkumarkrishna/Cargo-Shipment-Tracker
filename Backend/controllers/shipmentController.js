const Shipment =require("../models/Shipment")
const { calculateETA } = require("../utils/calculateETA");

// Get all shipments
exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({});
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a shipment by shipmentId
exports.getShipmentById = async (req, res) => {
    try {
        const shipment = await Shipment.findOne({ shipmentId: req.params.shipmentId });
        if (!shipment) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        res.status(200).json(shipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new shipment
exports.createShipment = async (req, res) => {
  const { shipmentId, containerId, route, currentLocation, currentETA } =
    req.body;
  const shipment = new Shipment({
    shipmentId,
    containerId,
    route,
    currentLocation,
    currentETA,
  });

  try {
    const savedShipment = await shipment.save();
    res.status(201).json(savedShipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update shipment location
exports.updateLocation = async (req, res) => {
    try {
        // Find the shipment by shipmentId instead of _id
        const shipment = await Shipment.findOneAndUpdate(
            { shipmentId: req.params.shipmentId }, // Use shipmentId for lookup
            { currentLocation: req.body.currentLocation, updatedAt: Date.now() },
            { new: true } // Return the updated document
        );

        if (!shipment) {
            return res.status(404).json({ message: "Shipment not found" });
        }

        res.status(200).json(shipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Get ETA for a specific shipment
exports.getETA = async (req, res) => {
    try {
        // Find the shipment by shipmentId instead of _id
        const shipment = await Shipment.findOne({ shipmentId: req.params.shipmentId });
        if (!shipment) {
            return res.status(404).json({ message: "Shipment not found" });
        }

        // Assuming the speed is provided (e.g., in km/h)
        const speed = 60; // Example speed
        const eta = calculateETA(
            shipment.route.map((loc) => ({
                latitude: loc.location.coordinates[1],
                longitude: loc.location.coordinates[0],
            })),
            speed
        );

        res.status(200).json({ currentETA: eta });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
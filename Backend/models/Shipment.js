const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true,
    unique: true,
  },
  containerId: {
    type: String,
    required: true,
  },
  route: [
    {
      location: {
        type: {
          type: String,
          enum: ["Point"], // GeoJSON type
          required: true,
        },
        coordinates: {
          type: [Number], // [longitude, latitude]
          required: true,
        },
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  currentLocation: {
    type: {
      type: String,
      enum: ["Point"], // GeoJSON type
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  currentETA: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a geospatial index for currentLocation and route
shipmentSchema.index({ currentLocation: "2dsphere" });
shipmentSchema.index({ "route.location": "2dsphere" });

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;

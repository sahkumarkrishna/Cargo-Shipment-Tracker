// Function to calculate the estimated time of arrival (ETA)
const calculateETA = (route, speed) => {
  let totalDistance = 0;

  // Calculate the total distance of the route
  for (let i = 0; i < route.length - 1; i++) {
    const start = route[i];
    const end = route[i + 1];
    totalDistance += calculateDistance(start, end);
  }

  // Calculate time in hours
  const time = totalDistance / speed;
  const eta = new Date();
  eta.setHours(eta.getHours() + time); // Add time to current time

  return eta; // Return the estimated time of arrival
};

// Function to calculate the distance between two geographical points
const calculateDistance = (start, end) => {
  const R = 6371; // Radius of Earth in km
  const dLat = ((end.latitude - start.latitude) * Math.PI) / 180;
  const dLon = ((end.longitude - start.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((start.latitude * Math.PI) / 180) *
      Math.cos((end.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Return distance in km
};

// Export the functions for use in other modules
module.exports = { calculateETA, calculateDistance };

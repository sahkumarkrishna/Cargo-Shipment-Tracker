const requestLogger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} request to ${url}`);
  next(); // Call the next middleware or route handler
};

module.exports = requestLogger;

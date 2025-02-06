const errorHandler = (err, req, res, next) => {
  // Log the error (you can use a logging library like Winston or Morgan for better logging)
  console.error(err.stack);

  // Set the response status code and send the error message
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;

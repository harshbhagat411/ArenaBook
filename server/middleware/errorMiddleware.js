export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode || 500);
  const message = err.message || 'Something went wrong';
  
  // Log the error details for debugging
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  } else {
    console.error(err.message);
  }

  res.status(statusCode).json({
    success: false,
    message: err.statusCode ? message : 'Something went wrong'
  });
};

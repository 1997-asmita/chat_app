const successMessage = (res, data, message, code, status) => {
  return res.status(200).json({
    status: status,
    code: code,
    message: message,
    data: data,
  });
};

const errorMessage = (res, message, code, status) => {
  return res.status(200).json({
    status: status,
    code: code,
    message: message,
  });
};

module.exports = { successMessage, errorMessage };

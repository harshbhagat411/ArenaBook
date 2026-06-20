class ApiResponse {
  constructor(statusCode, message = "Operation successful", data = {}) {
    this.success = true;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

export default ApiResponse;

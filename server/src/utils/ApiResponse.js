class ApiResponse {
  constructor(statusCode, data, message) {
    this.statusCode = statusCode;
    this.status = 400 > statusCode;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponse;
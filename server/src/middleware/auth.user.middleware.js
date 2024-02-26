const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
require("dotenv").config();

const authenticator = (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  const refreshToken = req.headers.refresh_token.split(" ")[2];
  try {
    if (!accessToken && !refreshToken) {
      throw new ApiError(401, "Access Denied");
    }
    const isAccessTokenValid = jwt.verify(accessToken, process.env.ACCESS_KEY);
    if (isAccessTokenValid) {
      res.send(new ApiResponse(200, "Access Granted"));
      // next();
    } else {
      const isRefreshTokenValid = jwt.verify(
        refreshToken,
        process.env.REFRESH_KEY
      );
      if (isRefreshTokenValid) {
        const newAccessToken = jwt.sign(
          { id: isRefreshTokenValid.id },
          process.env.ACCESS_KEY,
          {
            expiresIn: "1m",
          }
        );
        res.send(
          new ApiResponse(200, "Access Granted", {
            accessToken: newAccessToken,
          })
        );
      } else {
        throw new ApiError(401, "Access Denied");
      }
    }
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};

module.exports = authenticator;

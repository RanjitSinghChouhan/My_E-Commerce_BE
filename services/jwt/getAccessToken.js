const jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_MAXAGE, JWT_ALGORITHM } = require("./jwtConfig");
const JWT_ACCESS_TOKEN_SECRET = "skjdfnien";

const getAccessToken = ({ userId }) => {
  return jwt.sign(
    { userInfo: { userId }, generatedAt: new Date().getTime() },
    JWT_ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_MAXAGE, algorithm: JWT_ALGORITHM }
  );
};
module.exports = getAccessToken;

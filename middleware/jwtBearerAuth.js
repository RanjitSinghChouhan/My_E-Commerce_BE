const { verifyJwtAccessToken } = require("../services/jwt");

const jwtBearerAuth = (req, res, next) => {
    const accessToken = req.get("Authorization");
    if(!accessToken){
        return res.json(401, {message: "Token is invalid"})
    }
    return verifyJwtAccessToken(accessToken).then(userInfo => {
        req.userInfo = userInfo;
        return next();
    })
    .catch((error) => res.json(401, error))
}
module.exports = jwtBearerAuth
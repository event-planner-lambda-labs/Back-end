// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");

// module.exports = {
//   checkJwt
// };

// // Set up Auth0 configuration
// const authConfig = {
//   domain: "develope-event.auth0.com",
//   audience: "https://develope-event.auth0.com/api/v2/"
// };

// // Define middleware that validates incoming bearer tokens
// // using JWKS from develope-event.auth0.com
// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//   }),

//   audience: authConfig.audience,
//   issuer: `https://${authConfig.domain}/`,
//   algorithm: ["RS256"]
// });

module.exports = (req, res, next) => {
  next();
};

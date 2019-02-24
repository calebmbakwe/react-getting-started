require("dotenv").config();
const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const checkScopes = require("express-jwt-authz");

const checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ["RS256"]
});

const checkRole = role => {
  return (req, res, next) => {
    const assignedRoles = req.user["http://localhost:3000/roles"];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role))
      return next();
    else return res.status(401).send("Insufficient role");
  };
};

const app = express();

app.get("/public", (req, res) => {
  res.json({
    message: "Hello from a public api"
  });
});

app.get("/private", checkJWT, (req, res) => {
  res.json({
    message: "Hello from a private api"
  });
});

app.get("/courses", checkJWT, checkScopes(["read:courses"]), (req, res) => {
  res.json({
    courses: [
      { id: 1, title: "Omlete du fromage" },
      { id: 2, title: "That Devil is a liar" }
    ]
  });
});

app.get("/admin", checkJWT, checkRole("admin"), (req, res) => {
  res.json({
    message: "Hello from an admin api"
  });
});

app.listen(3001);
console.log("Server listening on " + process.env.REACT_APP_API_URL);

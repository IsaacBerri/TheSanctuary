import jwt from "jsonwebtoken";

export function validateToken(req, res, next) {
  const accessToken = req.headers["authorization"];
  if (!accessToken) res.send("Access denied");

  jwt.verify(accessToken, "secret", (err, user) => {
    if (err) {
      res.send("Access denied, token expired or incorrect");
    } else {
      next();
    }
  });
}

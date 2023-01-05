import JWT from "jsonwebtoken";
import { createError } from "../utils/error.js";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  JWT.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));
    req.user = user;

    next();
  });
};

import jwt from 'jsonwebtoken';
import response from '../helpers/response';
module.exports = function auth(req, res, next) {
  const token = req.header('x-token');
  if (!token) {

  return response.responses(res, 401, 'Access denied. no token provided.', false);
  }
  try {
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   const admin = decoded.is_admin;
    next();
  } catch (ex) {
    return response.responses(res, 401, 'invalid token.', false);
  }
};
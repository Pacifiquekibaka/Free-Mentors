import jwt from 'jsonwebtoken';
import giveResponse from '../helpers/response';

const { responses } = giveResponse;
module.exports = function auth(req, res, next) {
  const token = req.header('x-token');
  if (!token) {
   
    return responses(res,401,null, true, 'Access denied. no token provide' ); 

  }
  try {
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   const admin = decoded.is_admin;
    next();
  } catch (ex) {
    return responses(res,401,null, true, 'invalid token.' );
  
  }
};

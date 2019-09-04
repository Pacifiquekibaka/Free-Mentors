import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import giveResponse from '../helpers/response';
import user_data from '../models/user_data';
import {validate} from "../middleware/Validatelogin";

const {responses} = giveResponse;
//import dotenv from 'dotenv';
require('dotenv').config(); // to require environment variable form a .env file into process.env

const loginUser = async (req, res) => {
                //joi
const { error } = validate(req.body); 
if (error) return responses(res,401,null, true, error.details[0].message );
              //joi end
    const currentUser = user_data.find(user => user.email === req.body.email);
    if (!currentUser) return responses(res,404,null, true, 'invalid username or password' );
  
    const comparePass = await bcrypt.compare(req.body.password, currentUser.password);
    if (!comparePass) return responses(res,404,null, true, 'invalid username or password' );
    const token=jwt.sign({id:currentUser.id, is_admin: currentUser.is_admin},process.env.JWT_SECRET,{expiresIn:"24h"});
    // omit password
    // eslint-disable-next-line no-unused-vars
    const { password : _,address, bio, occupation, expertise, is_admin, ...omitpUser } = currentUser;
 
    return responses(res, 200, { token, ...omitpUser}, false, 'Successfully logged in');
   
  };
  
  export default loginUser;
  
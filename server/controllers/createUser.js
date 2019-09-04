import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user_data from '../models/user_data';
import giveResponse from '../helpers/response';
import {validate} from "../middleware/validateUser";

const { responses } = giveResponse;
const createUser = async (req, res) => {
                //joi
const { error } = validate(req.body); 
if (error) return res.status(401).send(error.details[0].message);
              //joi end    
  const {first_name,last_name,email,password,address,bio,occupation,expertise,is_admin} = req.body;

  let checkUser = user_data.find(user => user.email === req.body.email);
  if (checkUser) return responses(res,409,null, true, 'User already exist' );
  
  let newUser = {
    id: user_data.length + 1,
    first_name,
    last_name,
    email,
    password,
    address,
    bio,
    occupation,
    expertise,
    is_admin
  };

 const salt = await bcrypt.genSalt(10); // await is an operator used to wait for promise to resolve or reject
 newUser.password = await bcrypt.hash(newUser.password, salt);
 user_data.push(newUser);
 
 //generate token
 const token=jwt.sign({id:newUser.id},process.env.JWT_SECRET,{expiresIn:"24h"});
 // omit password
 // eslint-disable-next-line no-unused-vars
 const { password : _, ...omitpUser } = newUser;
 
    return responses(res, 201, { token,...omitpUser }, false, 'User created successfully');
  
    }



export default createUser;
import Joi from 'joi';

function validate(req) {
  const schema = {
    email: Joi.string().allow().trim().strict().email().required(), 
    first_name: Joi.string().allow().trim().strict().required().min(4).max(255),
    last_name: Joi.string().allow().trim().strict().required().min(4).max(255),
    password: Joi.string().allow().trim().strict().required().min(6).max(50),
    address: Joi.string().allow().trim().strict().required().min(4).max(255),
    bio: Joi.string().allow().trim().strict().required().min(20).max(400),
    occupation: Joi.string().allow().trim().strict().required().min(4).max(50),
    expertise: Joi.string().allow().trim().strict().required().min(4).max(50),
    is_mentor: Joi.boolean(),
    is_admin: Joi.boolean()
  
  };

  return Joi.validate(req, schema);
}

export {validate};
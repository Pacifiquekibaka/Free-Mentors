import Joi from 'joi';

function validate(req) {
    const schema = {
      menteeEmail: Joi.string().allow().trim().strict().email().required(), 
      questions: Joi.string().allow().trim().strict().required().min(15).max(255),
      status: Joi.string().allow().trim().strict().required()
    };
  
    return Joi.validate(req, schema);
  }
  
  export {validate};
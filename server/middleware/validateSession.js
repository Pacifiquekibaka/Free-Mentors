import Joi from 'joi';

function validate(req) {
    const schema = {
      menteeEmail: Joi.string().email().required(), 
      questions: Joi.string().required().min(15).max(255),
      status: Joi.string().required()
    };
  
    return Joi.validate(req, schema);
  }
  
  export {validate};
//import jwt from 'jsonwebtoken';
import session_data from '../models/session_data';
import giveResponse from '../helpers/response';
import {validate} from "../middleware/validateSession";

const { responses } = giveResponse;
const createSession = async (req, res) => {
  
    const { error } = validate(req.body); 
    if (error) return responses(res,400,null, true, error.details[0].message );
    
    const{questions,menteeEmail,status }=req.body;

    const newSession = {
        sessionId: session_data.length + 1,
        mentorId: session_data.length + 1,
        menteeId: session_data.length + 1,
        questions,
        menteeEmail,
        status

    };
session_data.push(newSession);
return responses(res,200,newSession, false, 'Session created Successfully' );

}

export default createSession;
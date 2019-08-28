//import bcrypt from 'bcryptjs';
import mentor_data from '../models/mentor_data.js';
import giveResponse from '../helpers/response';
//import {validate} from "../middleware/validateMentor";

class mentorController {

    /*********view all mentors************/
    static async getAllMentors(req, res) {
      giveResponse.responses(res, 200, mentor_data,false);
    }
   
}
export default mentorController;
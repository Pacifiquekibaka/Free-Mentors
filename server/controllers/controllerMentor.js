//import bcrypt from 'bcryptjs';
import mentor_data from '../models/mentor_data.js';
import giveResponse from '../helpers/response';
//import {validate} from "../middleware/validateMentor";

class mentorController {

    /*View all mentors*/
    static getAllMentors(req, res) {
      giveResponse.responses(res, 200, mentor_data,false);
    } 

   /*View a specific mentor*/
   static getSingleMentor(req, res) {
    const findMentor = mentor_data.find(data =>data.mentorId === parseInt(req.params.id, 10));
    if (findMentor) {
      giveResponse.responses(res, 200, findMentor,false); 
    }
    else{
      giveResponse.responses(res, 404, `Mentor doesn't exist`,true)
    }
   
  }

}



export default mentorController;
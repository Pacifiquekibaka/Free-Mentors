import mentor_data from '../models/mentor_data.js';
import giveResponse from '../helpers/response';
//import {validate} from "../middleware/validateMentor";

const { responses} = giveResponse;
class mentorController {

    /*View all mentors*/
    static getAllMentors(req, res) {
      //omit password in response spec
      // eslint-disable-next-line no-unused-vars
      const mentors = mentor_data.map(({ password, ...omitpMentors}) => omitpMentors );
      return responses(res,200,mentors, false, 'Mentors received successfully' );
    } 



}


export default mentorController;
import mentor_data from '../models/mentor_data.js';
import giveResponse from '../helpers/response';
//import user_data from '../models/user_data';

const { responses} = giveResponse;
class mentorController {

    /*View all mentors*/
    static getAllMentors(req, res) {
      //omit password in response spec
      // eslint-disable-next-line no-unused-vars
      const mentors = mentor_data.map(({ password, ...omitpMentors}) => omitpMentors );
      return responses(res,200,mentors, false, 'Mentors received successfully' );
    } 

   /*View a specific mentor*/
   static getSingleMentor(req, res) {
    const findMentor = mentor_data.find(data =>data.mentorId === parseInt(req.params.id, 10));
    if (findMentor) {
      //omit password
      // eslint-disable-next-line no-unused-vars
      const { password: _ , ...omitpMentor } = findMentor;
      return responses(res,200,{...omitpMentor}, false, 'Mentor received successfully' );
    
    }
    else{
      return responses(res,400,null, true, 'Mentor does not exist' );
  
    }
   
  }

  
}

export default mentorController;
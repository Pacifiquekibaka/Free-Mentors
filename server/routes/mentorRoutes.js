import express from 'express';
import mentorController from '../controllers/controllerMentor';
//import checkToken from '../middleware/userToken';


const router = express.Router();

/*route to get all mentors*/
router.get('/Mentors', mentorController.getAllMentors);


export default router;

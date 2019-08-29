import express from 'express';
import mentorController from '../controllers/controllerMentor';
//import checkToken from '../middleware/userToken';


const router = express.Router();

/*route to get all mentors*/
router.get('/mentors', mentorController.getAllMentors);

/*route to get a specific mentor*/
router.get('/mentors/:id', mentorController.getSingleMentor);

export default router;















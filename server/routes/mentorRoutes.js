import auth from '../middleware/checkAuth';
import express from 'express';
import mentorController from '../controllers/controllerMentor';


const router = express.Router();

/*route to get all mentors*/
router.get('/mentors',[auth,mentorController.getAllMentors] );

/*route to get a specific mentor*/
router.get('/mentors/:id', [auth,mentorController.getSingleMentor]);


export default router;


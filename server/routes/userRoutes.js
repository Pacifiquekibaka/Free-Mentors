import express from 'express';
//import auth from '../middleware/checkAuth';
import createUser from '../controllers/createUser.js';
import loginUser from '../controllers/loginUser.js';
//import mentorController from '../controllers/controllerMentor';

const router = express.Router();
 //sign up and sign in
router.post('/auth/signup',createUser);
router.post('/auth/signin',loginUser);



export default router;

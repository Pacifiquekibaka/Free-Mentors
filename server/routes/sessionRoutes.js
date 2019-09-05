import express from 'express';
import auth from '../middleware/checkAuth';
import createSession from '../controllers/controllerSession.js';

const router = express.Router();

//Create a mentorship session request route

router.post('/sessions',[auth, createSession]);

export default router;
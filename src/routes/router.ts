import express from 'express';
import * as userController from '@/controllers/userController';

const router = express.Router();


// POST /api/users/signup
router.post('/signup', userController.userRegister);
// POST /api/users/login
router.post('/login', userController.userLogin);



export default function initRouter(app: express.Application) {
  app.use(router);
}

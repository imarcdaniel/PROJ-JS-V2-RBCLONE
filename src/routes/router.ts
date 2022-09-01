import express from 'express';
import * as userController from '@/controllers/userController';

const router = express.Router();


// POST /api/users/signup
router.post('/signup', userController.userRegister);


export default function initRouter(app: express.Application) {
  app.use(router);
}

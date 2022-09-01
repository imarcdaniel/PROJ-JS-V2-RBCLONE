import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/error';
import * as userServices from '../services/user.service';


export const userRegister = async (req: Request, res: Response) => {
 try {
   await userServices.register(req.body);
   res.status(200).send('Registered successfully');
 } catch (error) {
   return res.status(500).send(getErrorMessage(error));
 }
};


import { DocumentDefinition } from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel, {I_UserDocument } from '../models/user.model';


export async function register(user: DocumentDefinition<I_UserDocument>): Promise<void> {
 try {
   await UserModel.create(user);
 } catch (error) {
   throw error;
 }
}

export async function login(user: DocumentDefinition<I_UserDocument>) {
    try {
        const foundUser = await UserModel.findOne({ name: user.name });
     
        if (!foundUser) {
          throw new Error('Name of user is not correct');
        }
     
        const isMatch = bcrypt.compareSync(user.password, foundUser.password);
     
        if (isMatch) {
     return foundUser 
        } else {
          throw new Error('Password is not correct');
        }
      } catch (error) {
        throw error;
      }
     }
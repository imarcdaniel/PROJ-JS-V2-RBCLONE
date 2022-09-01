import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const SALT_ROUNDS = 8 // minimum number of rounds to use when hashing passwords

export interface I_UserDocument extends mongoose.Document {
 name: string;
 email: string;
 password: string;
}

const UserSchema: mongoose.Schema<I_UserDocument> = new mongoose.Schema({
    name: {type: String, unique: true},
    email: { type: String,
    unique: true,
    trim: true, // remove whitespace
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  }
}, {
  timestamps: true,
  // trick not to send password to clients!
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
  

});

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
  next();
 });

const UserModel = mongoose.model<I_UserDocument>('User', UserSchema);
export default UserModel; 


import mongoose from 'mongoose';

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

const UserModel = mongoose.model<I_UserDocument>('User', UserSchema);
export default UserModel; 
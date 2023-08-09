import {Schema, Document, model} from 'mongoose';

export interface UserDocument extends Document {
  firstName: string,
  secondName: string,
  email: string,
  password: string,
  isActivated: boolean,
  activationLink: string,
}

const UserSchema = new Schema<UserDocument>({
  firstName: {type: String, required: true},
  secondName: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String},
})

export default model('User', UserSchema);

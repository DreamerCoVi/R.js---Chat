import mongoose, {Schema, Document} from 'mongoose';
import {isEmail} from 'validator';


export interface IUser extends Document{
    email: string;
    name: string;
    password: string;
    confirmed: string;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
}

const UserSchema = new Schema({
    email: {
        type: String,
        validate: [isEmail, 'Invalid Email'],
        required: 'Email is required',
        unique: true,
    },
    avatar: String,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmed: {
        type: String,
        default: false,
        required: true
    },
    confirmed_hash: String,
    lasst_seen: Date,
    },{
        timestamps: true
});

const User = mongoose.model<IUser>('User', UserSchema);


export default User;
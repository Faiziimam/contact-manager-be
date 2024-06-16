import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please add a username'],
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: [true, 'This email is already registered, Please use different email.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    }
},
    {
        timestamps: true
    }

)

const User = mongoose.model("User", userSchema);

export default User;
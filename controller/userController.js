import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/* 
    @Description : To register a new user
    @Route : POST /api/users
    @Access : public
*/
export const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password)
    {
        res.status(400);
        throw new Error('Please enter all the required fields');
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable)
    {
        res.status(400);
        throw new Error('User is already registered!');
    }
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          userName,
          email,
          password: hashPassword,
        });
        if (user) {
          res.status(201).json({ isSuccess: true, id: user._id, email: user.email });
        } else {
          res.status(400);
          throw new Error('User details are not valid!');
        }
      } catch (error) {
        res.status(500);
        throw new Error('Server error: Unable to register user');
      }
});

/* 
    @Description : log a new user
    @Route : GET /api/users
    @Access : public
*/  
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Invalid email or password');
    }
    const user = await User.findOne({ email });
    try {
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (user && isPasswordCorrect)
        {
            const accessToken = jwt.sign({
                user: {
                    username: user.userName,
                    email: user.email,
                    id:user.id
                }
            },
                process.env.ACCESS_TOKEN_SECRET_KEY,
                {
                    expiresIn:'10m',
                }
            )
            res.status(200).json({accessToken})
        }
        else {
            res.status(401);
            throw new Error('User details are not valid');
        }
    }
    catch (error) {
        res.status(500);
        throw new Error('Server error: Unable to register user');
    }
});

/* 
    @Description : To get current details of the user
    @Route : GET /api/users
    @Access : private
*/
export const getCurrentUserDetails = asyncHandler(async (req, res) => {
    res.json({isSuccess:true,user:req.user});
  });
  
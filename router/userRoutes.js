import { Router } from "express";
import { getCurrentUserDetails, loginUser, registerUser } from "../controller/userController.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/currentUserDetails').get(validateToken, getCurrentUserDetails)


export default router;
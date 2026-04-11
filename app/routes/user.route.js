import { Router } from 'express'
import { body } from 'express-validator'
import { loginUser, signupUser } from '../controllers/user.controller.js'
const router = Router()

router.post(
    '/signup',
    [
        body('username').isLength({ min: 4 }).withMessage("Username must be at least 4 characters long"),
        body('email').isEmail(),
        body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
    ], signupUser)



router.post(
    '/login',
    // express validator middleware
    [
        body('username').isLength({ min: 4 }).withMessage("Username must be at least 4 characters long"),
        body('email').isEmail(),
        body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
    ], loginUser)

export default router
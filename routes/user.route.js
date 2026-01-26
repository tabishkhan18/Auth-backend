import { Router } from 'express'
import { body } from 'express-validator'

const router = Router()


router.post(
    '/login',
    [
        body('username').isLength({min: 4}).withMessage("Username must be at least 4 characters long"),
        body('email').isEmail(),
        body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long")
    ],
    (req, res)=> {
        res.send("Login Page")
    })
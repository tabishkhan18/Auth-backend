import User from "../models/user.model.js";

export const signupUser = async (req, res)=>{
    const { username, email, password} = req.body;
    const isemailAlreadyExists = await User.findOne({email})
    if(isemailAlreadyExists){
        return res.status(400).json({
            message: 'User already exists'
        })
    }
    const hashedPassword = await User.hashPassword(password)
    const createdUser = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(createdUser)
    // const token = await User.generateAuthToken();
    return res.status(200).json(
        {
            message: "Signup successfully",
            // token,
            createdUser 
        }
    )
}

export const loginUser = async (req, res)=> {
    try {
        const { username, email, password} = req.body

        if(!email || !username || !password ){
            return res.status(400).json({
                message: "Email or Username and Password is required"
            })
        }
        const existedEmail = await User.findOne({email})
        if(!existedEmail){
            return res.status(404).json({
                message: "User not found"
            })
        }
        const isPasswordValid = await existedEmail.comparePassword(password)
        if(!isPasswordValid){
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }
        return res.status(200).json({
            message: "Login Successfully!"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error,
            message: "Internal server erroror"
        })
    }
}
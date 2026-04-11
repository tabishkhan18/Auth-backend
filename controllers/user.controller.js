import User from "../models/user.model.js";

export const signupUser = async (req, res)=>{

    const { username, email, password} = req.body;

    const isemailAlreadyExists = await User.findOne({email})
    
    if(isemailAlreadyExists){
        return res.send(400).json({
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
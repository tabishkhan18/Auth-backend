import User from "../models/user.model.js";

export default signupUser = async (req, res)=>{


    const {username, email, password} = req.body;

    const isUserAlreadyExists = await User.findOne(username)

    if(!isUserAlreadyExists){
        return res.send(400).json({
            message: 'User already exists'
        })
    }

    const hashedPassword = await User.hashedPassword(password)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    const token = await User.generateToken();

    return res.status(200).json(
        {token, user }
    )
    
}
import {Schema, model} from "mongoose";
import jwt from 'jsonwebtoken'
import bcyrpt from 'bcrypt'


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
},{
    timestamps: true,
})


userSchema.methods.generateAuthToken = async function (){
    const token = jwt.sign(
        {
            _id: this._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h',
        }
    )
    return token;
}

userSchema.method.hashPassword = async function(password){
    return await bcyrpt.hash(password, 10)
}

userSchema.methods.comparePassword = async function(password){
    return await bcyrpt.compare(
        password,
        this.password
    )
}

const User = model("User", userSchema);
export default User
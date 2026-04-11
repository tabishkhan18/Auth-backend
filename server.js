import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from "express"
import { connectDB } from "./app/db/conn.js"
import cookiesParser from 'cookie-parser'

const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookiesParser())


app.get("/", (req, res)=>{
    res.send("Server is up... :)")
})

import userRoutes from './app/routes/user.route.js'
app.use('/user', userRoutes)

app.listen(PORT, (req, res)=>{
    console.log(`App running on port ${PORT}`)
})
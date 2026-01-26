import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from "express"
import { connectDB } from "./db/conn.js"

const PORT = process.env.PORT || 3000
const app = express()

connectDB()

app.get("/", (req, res)=>{
    res.send("Inintialized backend")
})

app.listen(PORT, (req, res)=>{
    console.log(`App running on port ${PORT}`)
})
import express from "express"
import { connectDB } from "./db/conn.js"

const PORT = 8080
const app = express()

connectDB()


app.get("/", (req, res)=>{
    res.send("Inintialized backend")
})

app.listen(PORT, (req, res)=>{
    console.log(`App running on port ${PORT}`)
})
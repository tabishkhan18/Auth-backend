import express from "express"

const PORT = 8080
const app = express()

app.get("/", (req, res)=>{
    res.send("Inintialized backend")
})

app.listen(PORT, (req, res)=>{
    console.log(`App running on port ${PORT}`)
})
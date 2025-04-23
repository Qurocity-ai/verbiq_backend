import express from "express";
import dotenv from "dotenv";
import cors from "cors"
const app = express()
dotenv.config()
const PORT = process.env.PORT || 8080

app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server is Listening on Port:${PORT}`)
})
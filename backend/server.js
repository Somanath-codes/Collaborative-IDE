const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI


mongoose.connect(MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
        .then (()=> console.log("Connected to MongoDB"))
        .catch((err)=>console.error("MongoDB Connection Error:",err))

app.get("/",(req,res)=>
{
    res.send("Colide backed in running")
})

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))


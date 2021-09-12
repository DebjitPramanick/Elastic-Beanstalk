const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Sample = require("./Sample.js")

const app = express()

mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.once('open', () => console.log("DB connected..."))

app.get("/", async(req,res) => {
    let data = await Sample.find()
    res.send(data)
})

app.listen(8080, () => console.log("Server connected to 8080..."))
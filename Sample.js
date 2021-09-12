const mongoose = require('mongoose')

const SampleSchema = new mongoose.Schema({
    title: String,
    desc: String
})

module.exports = mongoose.model("Sample", SampleSchema)
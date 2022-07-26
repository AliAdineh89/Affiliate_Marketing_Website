const mongoose = require("mongoose")
const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ""
    },
    logo: {
        type: String,
        default: ""
    },
    pricePerClick: {
        type: Number,
        default: 0,
    }
})


module.exports = mongoose.model("company", CompanySchema)
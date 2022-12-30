const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    Name: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Age: { type: Number, required: true },
    Pincode: { type: Number, required: true },
    AadharNumber: { type: Number, required: true },
    password:{type:String,required:true}
},
    { timestamps: true })

    module.exports= mongoose.Model("User",userSchema)

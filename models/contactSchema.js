const mongoose = require("mongoose");

const contactDetails = new mongoose.Schema({
    name: {
        type :String,
        required : true
    },
    email: {
        type:String,
        required :true
    },
    mobile: {
        type:Number,
        required:true
    },
    message: {
        type:String,
        required:true
    }
 
});

module.exports= mongoose.model('Contact',contactDetails);
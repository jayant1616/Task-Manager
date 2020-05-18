const mongoose = require('mongoose');
const schema = mongoose.Schema;

userschema = new schema({
    username:{
        type:String,
        required : true
    },
    first_name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required: true,
    },
    password:{type:String,
    required:false,       },

    tasks:{
        type:[{type:schema.Types.ObjectId,
                ref:'Task'    }],
        required:false
    }
})

const User = mongoose.model('User',userschema);

module.exports= User;
//create models for tasks
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskschema = new schema({
    title:{
        type:String,
        required:true,
    },
    status : {
        type:Boolean,
        default:true,
    },
    author:{
        type:schema.Types.ObjectId,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duedate:{
        type:schema.Types.Date
    }
})

//create a model for this schema
const Task = mongoose.model('Task',taskschema);

module.exports = Task;
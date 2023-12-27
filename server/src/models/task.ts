import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
	//lister info
	name: 	                    { type: String},
	categoryId:			        { type: String},
    isCompleted:			    { type: Boolean},
    isOverdue:			        { type: Boolean},
    userId:                     { type: String},
    taskdate:                   { type: Date},
    tasktime:                   { type: Date},
    taskreminder:               { type: Date},
	//date
	createdAt:		{ type: Date,default: Date.now},
},{timestamps:true})

module.exports = mongoose.model("tasks",TaskSchema);
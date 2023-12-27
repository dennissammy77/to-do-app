import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
	//lister info
	name: 	                    { type: String},
	color:			            { type: String},
    icon:			            { type: String},
    userId:                     { type: String},
	//date
	createdAt:		{ type: Date,default: Date.now},
},{timestamps:true})

module.exports = mongoose.model("categories",CategorySchema);
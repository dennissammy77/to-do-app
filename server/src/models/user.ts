import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	//lister info
	name: 	                { type: String},
	email:			        { type: String},
    password:			    { type: String},
    pictureurl:             { type: String},
	//date
	createdAt:		{ type: Date,default: Date.now},
},{timestamps:true})

module.exports = mongoose.model("users",UserSchema);
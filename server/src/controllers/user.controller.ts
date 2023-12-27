import { Request, Response } from "express";
const User = require("../models/user")
import bcrypt from 'bcryptjs'

export const createUser = async (request : Request, response: Response) =>{
    try {
        const {name, email, password, picture } = request.body;
        console.log(name)
        const existingUser = await User.find({email})

        if (existingUser){
            return response.status(409).send("user already exists");
        }

         //sign a token and encrypt password
        const salt = bcrypt.genSaltSync(10);
        const encrypted_password = bcrypt.hashSync(password, salt);

        const newUser = User.create({
            name,
            email,
            password: encrypted_password,
            picture
        });
        console.log(newUser)

        return response.status(201).send("user created succesfully")
    }catch(err){
        console.log(err)
        throw Error("An error occured");
    }
}
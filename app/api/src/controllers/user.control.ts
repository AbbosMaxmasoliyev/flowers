import { mongo, MongooseError } from "mongoose";
import userModel from "../models/user.model";
import { UserInterface } from "../types"
import express, { Request, Response } from 'express';
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateToken, verifyToken } from "../utils/jwt";


let SECRET_KEY = process.env.SECRET_KEY || ""


export const signUpUser = async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, email, username, phoneNumber, password } = req.body as UserInterface;
    try {


        // Kerakli maydonlarni tekshirish
        if (!firstName || !lastName || !email || !username || !phoneNumber || !password) {
            res.status(400).send({ succes: false, msg: 'All fields are required.' });
            return
        }
        let hashedPassword = await hashPassword(password)
        let createdUser = await userModel.create({ username, firstName, lastName, email, phoneNumber, password: hashedPassword })
        let token = generateToken({ username, firstName, lastName, method: "POST", date: new Date().getTime() }, SECRET_KEY || "cndjcndjcndj", "1d")

        res.status(201).send({ success: true, token });


    } catch (error) {

        if (error instanceof mongo.MongoError && error.code === 11000) {
            res.status(401).send({ success: false, msg: "This user already exists" })
        }
        res.status(500).send({ success: false, msg: "Internal server error" })

    }



}



export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body as UserInterface;
    if (!username || !password) {
        res.status(400).send('All fields are required.');
        return
    }
    try {


        // Kerakli maydonlarni tekshirish

        let foundUser = await userModel.findOne({ username })

        if (!foundUser) {
            res.status(401).send({ success: false, msg: "This user not found" })
            return
        }

        let chechPassword = await comparePassword(password, foundUser?.password)
        if (!chechPassword) {
            res.status(401).send({ success: false, msg: "Password is incorrect" })
            return
        }
        let token = generateToken({ username: foundUser.username, firstName: foundUser.firstName, lastName: foundUser.lastName, method: "POST", date: new Date().getTime() }, SECRET_KEY, "1d")

        res.status(201).send({ success: true, token });
        return


    } catch (error) {

        if (error instanceof mongo.MongoError && error.code === 11000) {
            res.status(401).send({ success: false, msg: "This user already exists" })
            return
        }
        res.status(500).send({ success: false, msg: "Internal server error" })

    }



}


export const authenticationUser = async (req: Request, res: Response): Promise<void> => {

    const Authorization = req.headers.authorization;

    if (!Authorization) {
        res.status(401).send({ success: false, msg: "Not Authorisized" });
        return
    }

    let token = Authorization.split(" ")[1]

    if (!token) {
        res.status(401).send({ success: false, msg: "Not Authorisized" });
        return
    }

    try {

        let decodeToken = verifyToken(token)
        console.log(decodeToken);


        let user = await userModel.findOne({ username: decodeToken.username })
        if (!user) {
            res.status(401).send({ success: false, msg: "Not Authorized" })
            return
        }

        let generatedToken = generateToken({ username: user.username, firstName: user.firstName, lastName: user.lastName, method: "POST", date: new Date().getTime() }, SECRET_KEY, "1d")

        res.status(201).send({ success: true, token: generatedToken });

    } catch (error) {

        if (error instanceof mongo.MongoError && error.code === 11000) {
            res.status(401).send({ success: false, msg: "This user already exists" })
            return
        }
        res.status(500).send({ success: false, msg: "Internal server error" })

    }



}

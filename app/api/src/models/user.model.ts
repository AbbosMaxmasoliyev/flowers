import { Schema, model } from "mongoose"
import { UserInterface } from "../types"



const userSchema = new Schema<UserInterface>({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    photo: {
        type: String,
    },
    phoneNumber: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    _adress: {
        type: Schema.Types.ObjectId,
        ref: "Adress"
    },
    _orders: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    _wishlist: {
        type: Schema.Types.ObjectId,
        ref: "Wishlist"
    },
    _reports: {
        type: Schema.Types.ObjectId,
        ref: "Report"
    },
    downloads: [{
        type: Schema.Types.ObjectId,
        ref: "Flower"
    }]
})



export default model("User", userSchema)
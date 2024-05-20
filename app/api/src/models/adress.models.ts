import { Schema, model } from "mongoose"



const orderAdressModel = new Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    _orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order",
        require: true
    },
    adress: {
        country: String,
        city: String,
        street: String,
        state: String,
        zip: String,
        email: String,
        phoneNumber: String
    },
    notes: {
        type: String,
        require: false
    }
})



export default model("Order_Adress", orderAdressModel)
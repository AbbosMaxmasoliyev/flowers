import { Schema, model } from "mongoose"



const orderSchema = new Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    _adressId: {
        type: Schema.Types.ObjectId,
        ref: "Order_Adress",
        require: true
    },
    cost: {
        type: Float32Array,
        require: true
    },
    shiping: {
        type: Float32Array,
        require: true,
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Flowers"
            },
            count: Number
        }
    ]
})



export default model("Order", orderSchema)
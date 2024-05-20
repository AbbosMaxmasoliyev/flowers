import { Schema, model } from "mongoose"



const flowerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    categories: {
        type: [String],
        require: true
    },
    size: {
        type: [String],
        enum: ["S", "M", "L", "XL"],
        require: true
    },
    rate: {
        type: Float32Array,
        default: 0
    },
    description: {
        type: String,
        require: true
    },
    images: {
        type: [String],
        require: true
    },
    sku: {
        type: String,
        require: true
    },
    tags: {
        type: [String],
        require: true
    },
    count: {
        type: Number,
        require: true
    }
})



export default model("Flower", flowerSchema)
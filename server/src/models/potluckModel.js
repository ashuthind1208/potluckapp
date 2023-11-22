import mongoose from 'mongoose'

const potluckSchema = mongoose.Schema({
    name : { type: String, required: true},
    dishName: {type: String, required: true}
})

export const potluckModel = mongoose.model("potluck", potluckSchema);
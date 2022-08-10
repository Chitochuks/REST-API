const mongoose =  require("mongoose")


const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    email: {
        type: String
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    hobbies: [String],
})


module.exports = mongoose.model('User', userSchema)
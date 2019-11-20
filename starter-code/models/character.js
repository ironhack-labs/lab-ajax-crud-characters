const { model, Schema } = require('mongoose')

const character = new Schema(
    {
        id: Number,
        name:String,
        occupation: String,
        weapon: String,
        cartoon: Boolean
    }
)
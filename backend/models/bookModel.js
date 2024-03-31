const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        author : {
            type : String,
            required : true
        },
        publishYear : {
            type : Number,
            required : true
        }
    }
)

const book = mongoose.model('meow', schema)

module.exports={book}
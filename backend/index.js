const express = require("express")
const {PORT,database} = require("./config.js")
const mongoose = require("mongoose")
const {route} = require("./routes/bookRoute.js")
const {book} = require("./models/bookModel.js")
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/books',route)

console.log(PORT)


app.listen(PORT,()=>{
    console.log("Server is listening on port 5000")
})

mongoose.connect(database)
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((Error)=>{
        console.log(Error)
    })
const express = require('express')
const {book} = require('../models/bookModel.js')

const route = express.Router()


route.get('/',async (req,res)=>{
    const books = await book.find({})
    return res.json({count:books.length, books:books})
})

route.put('/:id',async (req,res)=>{
    const updation = req.body
    const id = req.params.id
    if(!updation.title || !updation.author || !updation.publishYear)
        return res.send({
            message : "Send all parameters bro"    
        })
    const books = await book.findByIdAndUpdate(id,updation)
    return res.json({message:"Book updated successfully"})
})

route.get('/:id',async (req,res)=>{
    const id = req.params.id
    const books = await book.findById(id)
    return res.json(books)
})

route.delete('/:id',async (req,res)=>{
    const id = req.params.id
    const books = await book.findByIdAndDelete(id)
    return res.json({message:"Book deleted successfully"})
})

route.post('/', async (req,res)=>{

    const para = req.body
    if(!para.title || !para.author || !para.publishYear)
        return res.send({
            message : "Send all parameters bro"    
        })

    const newBook = await book.create(para)
    
    return res.send(newBook)
})

module.exports={route}
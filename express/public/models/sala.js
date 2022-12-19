const mongoose= require('mongoose')

const salasSchema = new mongoose.Schema(
    {
        "_id":{
            type: Number
        },
        "valor":{
            type: Number,
            required: true
        },
        "cantidad":{
            type: Number,
            required: true
        },
        "maximo":{
            type: Number,
            required: true
        },
        "fecha":{
            type: Date,
            required: true
        },
        "premio":{
            type: Number,
            required: true
        }   
    }
)
//se exporta a otros codigos
module.exports = mongoose.model('sala',salasSchema)

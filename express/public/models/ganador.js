const mongoose= require('mongoose')

const ganadoresSchema = new mongoose.Schema(
    {
        "_id":{
            type: Number
        },
        "id_user":{
            type: Number,
            required: true
        },
        "nombre":{
            type: String,
            required: true
        },
        "fecha":{
            type: Date,
            required: true
        },
        "numero":{
            type:Number,
            required:true
        }     
    }
)
//se exporta a otros codigos
module.exports = mongoose.model('ganador',ganadoresSchema)
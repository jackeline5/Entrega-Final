const mongoose= require('mongoose')

const participanteSchema = new mongoose.Schema(
    {
        "_id":{
            type: Number
        },
        "tipo":{
            type: String,
            required: true
        },
        "nombre":{
            type: String,
            required: true
        },
        "correo":{
            type: String,
            required: true
        },
        "sala":{
            type: Number,
            required: true
        },
        "identificacion":{
            type: Number,
            required: true
        }  
    }
)
//se exporta a otros codigos
module.exports = mongoose.model('participante',participanteSchema)
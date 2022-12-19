const express= require('express')
const participantesSchema = require('../models/participante.js');
const bodyParser = require('body-parser')
const router=express.Router();

//mostrar
router.get("/participantes", (req, res)=>{
   participantesSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({menssage:error}))
   
})

router.post("/crear-participante", (req, res)=> {
    console.log(req.body)
   const nuevo= new participantesSchema();
   nuevo._id=req.body._id
   nuevo.tipo=req.body.tipo
   nuevo.nombre=req.body.nombre
   nuevo.correo=req.body.correo
   nuevo.sala=req.body.sala
   nuevo.identificacion=req.body.identificacion    
       nuevo
           .save()
           .then((data)=>res.json(data))
           .catch((error)=>res.json({message:error})) 
           
    })
  

//eliminar
router.delete("/delete-participantes/:id", (req, res)=> {
    const{id}=req.params;
     participantesSchema
               .deleteMany({sala:id})
               .then((data)=>res.json({"status":200}))
               .catch((error)=>res.json({message:error}))
            
 })

module.exports=router;

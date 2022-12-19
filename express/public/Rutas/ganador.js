const express= require('express')
const ganadoresSchema = require('../models/ganador.js');
const bodyParser = require('body-parser')
const router=express.Router();

//mostrar
router.get("/ganadores", (req, res)=>{
   ganadoresSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({menssage:error}))
})

router.post("/ganador", (req, res)=> {
   console.log(req.body)
   const nuevo= new ganadoresSchema();
   nuevo._id=req.body.id
   nuevo.id_user=req.body.id_user
   nuevo.nombre=req.body.nombre
   nuevo.numero=req.body.numero
   nuevo.fecha=req.body.fecha    
       nuevo
           .save()
           .then((data)=>res.json(data))
           .catch((error)=>res.json({message:error})) 
    })
   

module.exports=router;

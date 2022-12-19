const express= require('express')
const salasSchema = require('../models/sala.js');
const bodyParser = require('body-parser')
const router=express.Router();

//mostrar
router.get("/salas", (req, res)=>{
   salasSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({menssage:error}))
   
})

router.get("/sala/:id", (req, res)=>{
    const{id}=req.params;
    salasSchema
     .findOne({"_id":id})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({menssage:error}))
    
 })

router.post("/createsala", (req, res)=> {
   console.log(req.body)
  const nuevo= new salasSchema();
   nuevo._id=req.body._id
   nuevo.valor=req.body.valor
   nuevo.cantidad=req.body.cantidad
   nuevo.maximo=req.body.maximo
   nuevo.fecha=req.body.fecha
   nuevo.premio=req.body.premio    
       nuevo
           .save()
           .then((data)=>res.json(data))
           .catch((error)=>res.json({message:error})) 
    })
   
//actualizar
router.put("/updatesala/:id", (req, res)=> {
    const{id}=req.params;
    const{premio,cantidad,valor,maximo,fecha}=req.body;
     salasSchema
               .updateOne({_id:id},{$set:{premio,cantidad,valor,maximo,fecha}})
               .then((data)=>res.json(data))
               .catch((error)=>res.json({message:error}))
            
 })

//eliminar
router.delete("/deletesala/:id", (req, res)=> {
    const{id}=req.params;
     salasSchema
               .remove({_id:id})
               .then((data)=>res.json({"status":200}))
               .catch((error)=>res.json({message:error}))
            
 })

module.exports=router;

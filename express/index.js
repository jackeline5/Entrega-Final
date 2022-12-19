const express= require('express')
const app= express();
const path = require("path")
let cors=require('cors')
app.listen('3000',()=>{
    console.log("Open exitosamente");
})

const bodyParser = require('body-parser')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
const mongo= require('./config/mongo');
const salaRuta=require("./public/Rutas/sala");
const participanteRuta=require("./public/Rutas/participante");
const ganadorRuta=require("./public/Rutas/ganador");
const { application } = require('express');
const { json } = require('body-parser');
app.use(salaRuta,participanteRuta,ganadorRuta);

mongo();

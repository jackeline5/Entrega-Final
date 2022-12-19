
const mongoose=require('mongoose')
const db_uri='mongodb://127.0.0.1/corte3';
module.exports= ()=>{
    const connect = ()=>{
        
        mongoose.connect(
                db_uri,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            }, 
            (err) => {
                if(err){
                    console.log("Error en la conexión");
                }else{
                    console.log("Conexión correcta"); 
                }
            }    
        )
        
    }

    connect();
    
}  
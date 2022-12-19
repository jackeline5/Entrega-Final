export class Participante{
    
    public tipo!:string
    public _id?:number
    public identificacion!:number
    public nombre!:string
    public correo!:string
    public sala!:number
    constructor(){}
    setValues(item:any){
        this.tipo=item.tipo
        this._id=item._id
        this.identificacion=item.identificacion
        this.nombre=item.nombre
        this.correo=item.correo
        this.sala=item.sala
        
    }
}
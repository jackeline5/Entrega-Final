import { Participante } from "../participante/participante";

export class Sala {
    public _id?:number
    public valor?: number
    public cantidad?: number
    public maximo?: number
    public actual?: number
    public fecha?: Date
    public premio?:number
    public activar!:boolean
    public participantes:Participante[]=[]
    constructor(){}
    setValues(item:any){
        this._id=item._id
        this.premio=item.premio
        this.cantidad=item.cantidad
        this.valor=item.valor
        this.maximo=item.maximo
        this.fecha=item.fecha
        if(this.cantidad!<this.maximo!){
            this.activar=true 
         }else{
             this.activar=false
         }
    }
}


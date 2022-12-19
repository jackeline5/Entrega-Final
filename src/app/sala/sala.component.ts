import { Component, OnInit } from '@angular/core';
import { ParticipantesService } from '../servicios/participantes/participantes.service';
import { Sala } from '../clases/sala/sala';
import { SalaService } from '../servicios/sala/sala.service';
import { Participante } from '../clases/participante/participante';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Ganador } from '../clases/ganador/ganador';
import { GanadorService } from '../servicios/ganador/ganador.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.sass']
})
export class SalaComponent implements OnInit {
 
  public sala=new Sala();
  participanteSubcription:Subscription=new Subscription
  public participante=new Participante();
  public ganador= new Ganador()
  public id!:number
  public cant!: number
  public val!: number;
  public g!:string
  public g2!:string
  constructor(
   public participantesService: ParticipantesService,
   public ganadorService:GanadorService,
   public salaService:SalaService,
   private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=Number(this.router.snapshot.paramMap.get('id')) 
    this.participantesService.get$().subscribe((item:Sala)=>{
      this.sala=item
      this.sala.participantes.forEach((element, item) => {
        let g1=String(element.identificacion)
        this.g=g1.substr(-4);
        this.sala.participantes[item].identificacion=Number(this.g)
      });
      this.participante=this.sala.participantes[Math.floor(Math.random() * this.sala.participantes.length)];
        let g1=String(this.participante.identificacion)
        this.g2=g1.substr(-4);

    } 
    )
    
    this.participantesService.get(this.id).subscribe()
   
  }

  OnGanador(){
    this.ganador.fecha=this.sala.fecha
    this.ganador.id=this.participante.sala
    this.ganador.id_user=this.participante.identificacion
    this.ganador.nombre=this.participante.nombre
    this.ganador.numero=this.participante._id
    this.ganador.tipo=this.participante.tipo
    this.ganadorService.create(this.ganador).subscribe();
  }
  OnDelete(){
    this.participantesService.delete(this.id).subscribe();
    this.salaService.delete(this.id).subscribe()
  }
}

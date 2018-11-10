import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ReservaService } from '../Reserva.service';

import { Reserva } from '../reserva';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [ReservaService]
})
export class ReservaCreateComponent implements OnInit {

  constructor(
  private reservaService: ReservaService,
  private toastrService: ToastrService,
  private route: ActivatedRoute) { }
  
  reserva: Reserva;
  idUsuario: number;
 
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  createReserva(): Reserva 
   {      
        this.reservaService.createReserva(this.reserva).subscribe((reserva) => {this.reserva = reserva; 
            this.create.emit();
            this.toastrService.success("La reserva fue creada", "Creacion de reserva");
            }, err => {
                this.toastrService.error(err, "Error");
            });
      console.log(this.reserva.usuario);
      console.log(this.reserva.abono); 
      console.log(this.reserva.descuento);
      console.log(this.reserva.precioTotal);
        return this.reserva;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
  
  ngOnInit() 
  {
      this.reservaService = this.route.params.subscribe(params => {this.idUsuario= +params['idUsuario'];
      this.reserva = new Reserva();
  }

}

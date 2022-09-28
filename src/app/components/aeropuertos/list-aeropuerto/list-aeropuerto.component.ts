import { Component, OnInit } from '@angular/core';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';

@Component({
  selector: 'app-list-aeropuerto',
  templateUrl: './list-aeropuerto.component.html',
  styleUrls: ['./list-aeropuerto.component.css']
})
export class ListAeropuertoComponent implements OnInit {

  constructor( public aeropuertoService : AeropuertoService) { }

  ngOnInit(): void {
    this.aeropuertoService.obtenerAeropuerto();
  }
  eliminarAeropuerto(id : number){
    if(confirm('¿Está seguro de eliminar el registro?')){
      this.aeropuertoService.eliminarAeropuerto(id).subscribe( data =>{
        alert("El aeropuerto ha sido eliminado");
        this.aeropuertoService.obtenerAeropuerto();
      })
    }
  }
 editar(aeropuerto){
    this.aeropuertoService.actualizar(aeropuerto);
  }

}

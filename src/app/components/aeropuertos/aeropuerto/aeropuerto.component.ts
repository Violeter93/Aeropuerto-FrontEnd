import { Component, OnInit , OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Subscription } from 'rxjs';
import { Aeropuerto } from 'src/app/models/aeropuerto';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';

@Component({
  selector: 'app-aeropuerto',
  templateUrl: './aeropuerto.component.html',
  styleUrls: ['./aeropuerto.component.css']
})
export class AeropuertoComponent implements OnInit, OnDestroy {
form?: FormGroup;
suscription?: Subscription;
  aeropuerto?: Aeropuerto;
  idAeropuerto= 0;
  constructor( private formBuilder: FormBuilder, private aeropuertoService : AeropuertoService) { this.form= this.formBuilder.group({
    id:0,
    nombre:['', [Validators.required]],
    ciudad:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    m2:['', [Validators.required]],
  })
}

  ngOnInit(): void {
    this.suscription = this.aeropuertoService.obtenerAeropuerto$().subscribe(data =>{
      console.log(data);
      this.aeropuerto= data;
      this.form?.patchValue({
        nombre: this.aeropuerto.nombre,
        ciudad: this.aeropuerto.ciudad,
        email: this.aeropuerto.email,
        m2: this.aeropuerto.m2
      });
      this.idAeropuerto = this.aeropuerto.id;
    });
  }
  ngOnDestroy(){
    this.suscription?.unsubscribe();
  }
  borrar(){
   this.form.reset();
  }
  guardarAeropuerto(){
    if( this.idAeropuerto===0){
this.agregar();
    }else{
      this.editar();
    }
   
  }
  agregar(){
    const aeropuerto: Aeropuerto={
      nombre: this.form.get('nombre')?.value,
      ciudad: this.form.get('ciudad')?.value,
      email: this.form.get('email')?.value,
      m2: this.form.get('m2')?.value
          }
          this.aeropuertoService.guardarAeropuerto(aeropuerto).subscribe(data => {
            alert("Aeropuerto guardado exitosamente");
            this.aeropuertoService.obtenerAeropuerto();
            this.form.reset();
          });
  }
  editar(){
    const aeropuerto: Aeropuerto={
      id: this.aeropuerto?.id,
      nombre: this.form.get('nombre')?.value,
      ciudad: this.form.get('ciudad')?.value,
      email: this.form.get('email')?.value,
      m2: this.form.get('m2')?.value
          };
          this.aeropuertoService.actualizarAeropuerto(this.idAeropuerto, aeropuerto).subscribe( data=>{
            alert("Aeropuerto actualizado");
            this.aeropuertoService.obtenerAeropuerto();
            this.form.reset();
            this.idAeropuerto= 0;
          })
  }
 


}

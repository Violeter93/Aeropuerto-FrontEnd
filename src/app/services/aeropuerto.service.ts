import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Aeropuerto } from '../models/aeropuerto';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  myAppUrl='https://localhost:7265/';
  myApiUrl='api/v1/Aeropuertos/';
  list?: Aeropuerto[];
  private actualizarFormulario = new BehaviorSubject<Aeropuerto>({} as any)

  constructor(private http : HttpClient) { }
  eliminarAeropuerto(id: number) : Observable<Aeropuerto>{
    return this.http.delete<Aeropuerto>(this.myAppUrl + this.myApiUrl + id)
  }
  guardarAeropuerto(aeropuerto: Aeropuerto) : Observable<Aeropuerto>{
    return this.http.post<Aeropuerto>(this.myAppUrl + this.myApiUrl, aeropuerto);
  }
  obtenerAeropuerto(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(
      data =>{
        this.list = data as Aeropuerto[];
      }
    )
  }
  actualizarAeropuerto(id: number, aeropuerto: Aeropuerto): Observable<Aeropuerto>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, aeropuerto);
  }
  actualizar(aeropuerto){
    this.actualizarFormulario.next(aeropuerto);
  }
  obtenerAeropuerto$(): Observable<Aeropuerto> {
    return this.actualizarFormulario.asObservable();
  }
}

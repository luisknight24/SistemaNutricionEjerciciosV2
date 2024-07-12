import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrarEjercicio } from '../interfaces/registrar-ejercicio';
import { ResponseApi } from '../interfaces/response-api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegitrarEjercicioService {
  private urlApi: string = environment.endpoint + "RegistroEjercicio/";
  
  constructor(private http: HttpClient) {     
    

   }

   ObtenerUsuarios(): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)

  }
  
  ObtenerUsuarios2(): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.urlApi}Lista2`)

  }


  ObtenerOdontologoId(id: number): Observable<RegistrarEjercicio>{
    return this.http.get<RegistrarEjercicio>(`${this.urlApi}${id}`);
  }

  guardarOdontologo(request: RegistrarEjercicio): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`, request)
  }

  editarOdontologo(request: RegistrarEjercicio): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`, request)
  }

  eliminarOdontologo(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`);
  }

  reporteEjercicio(fechaInicio: string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Reporte?fechaInicio=${fechaInicio}`);
    }

}
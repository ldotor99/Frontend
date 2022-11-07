import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private baseURL = "http://censopoblacionv1-env.eba-3urmumim.us-east-1.elasticbeanstalk.com/listarDepartamento";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDepartamentos(): Observable<Departamento[]> {
    return this.httpClient.get<Departamento[]>(`${this.baseURL}`);
  }
  
}

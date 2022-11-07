import { Injectable } from '@angular/core';
import { Informacionpoblacion } from '../models/informacionpoblacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InformacionpoblacionService {

  private baseURL = "http://censopoblacionv1-env.eba-3urmumim.us-east-1.elasticbeanstalk.com/listarInformacionPoblacion";
  private baseURL1 = "http://censopoblacionv1-env.eba-3urmumim.us-east-1.elasticbeanstalk.com/crearInformacionPoblacion";

  constructor(private httpClient : HttpClient) { }

  obtenerListaInformacionPoblacion(): Observable<Informacionpoblacion[]> {
    return this.httpClient.get<Informacionpoblacion[]>(`${this.baseURL}`);
  }

  registrarinformacionPoblacion(informacionPoblacion:Informacionpoblacion): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, informacionPoblacion)
  }
}



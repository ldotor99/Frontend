import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Municipio } from '../models/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private baseURL = "http://censopoblacionv1-env.eba-3urmumim.us-east-1.elasticbeanstalk.com/listarMunicipio";

  constructor(private httpClient : HttpClient) { }

  obtenerListaMunicipio(): Observable<Municipio[]> {
    return this.httpClient.get<Municipio[]>(`${this.baseURL}`);
  }
}

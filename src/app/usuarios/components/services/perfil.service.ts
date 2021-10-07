import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorAutenticacion";

  constructor(private http: HttpClient) {

  }

  
}

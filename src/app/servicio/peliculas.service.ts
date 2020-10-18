import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  public API = 'https://swapi.dev/api/films';
  constructor(private http: HttpClient) {
  }
  getAll(pag): Observable<any> {
    return this.http.get(this.API+"?page="+pag);
  }
  getById(id: string) {
    return this.http.get(this.API + '/' + id);
  }
}

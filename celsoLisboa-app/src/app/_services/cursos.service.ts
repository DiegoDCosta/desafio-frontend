import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {API} from '../_API/api';
import {Curso} from '../cursos/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor( private http: HttpClient) { }

  //método get de cursos
  getCursos(){
    return this.http.get<Curso[]>(`${API}/curso`)
  }

  deleteCourse(id: number){
    return this.http.delete<Curso[]>(`${API}/curso/${id}`)
  }
}

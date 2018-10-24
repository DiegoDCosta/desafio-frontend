import { Component, OnInit } from '@angular/core';
import { CursosService } from '../_services/cursos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor( private service: CursosService , http: HttpClient) { }

  ngOnInit() {}

}

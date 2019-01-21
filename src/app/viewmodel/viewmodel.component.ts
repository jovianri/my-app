import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-viewmodel',
  templateUrl: './viewmodel.component.html',
  styleUrls: ['./viewmodel.component.css']
})
export class ViewmodelComponent implements OnInit {

  public alumnos = [
    { id: 1, nombre: "Juan", apellidos: "Guti", ciudad: "Valencia" },
    { id: 2, nombre: "Juana", apellidos: "Gucci", ciudad: "Madriz" },
    { id: 3, nombre: "Ralph", apellidos: "Perez", ciudad: "Cevilla" },
    { id: 4, nombre: "Pepe", apellidos: "Ginebra", ciudad: "Valencia" },
  ];

  alumno1 = new Alumno(5, "Jose", "Lol", "Mezquita");

  ngOnInit() {
    this.alumnos.push(this.alumno1);
  }

}

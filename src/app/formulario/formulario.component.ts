import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}

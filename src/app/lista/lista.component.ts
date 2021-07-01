import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { generate } from 'shortid';
import { ListService } from '../services/listServices/list.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  Formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  EditForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  search = new FormControl('');
  musicBands: any;
  showEditForm: boolean = false;

  constructor(
   public listService: ListService 
  ) {
    this.musicBands = this.listService.getAllBand();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('rockBands')) {
      this.listService.initLocalStorage();
    }
    this.musicBands = this.listService.getAllBand();
  }

  onSubmit() {
    let musicBand = {
      id: generate(),
      nombre: this.Formulario.value.nombre,
      descripcion: this.Formulario.value.descripcion
    }
    this.listService.addBand(musicBand);
    console.log(this.listService.getAllBand());
    this.onReset();
    this.musicBands = this.listService.getAllBand();
  }

  onReset() {
    this.Formulario.reset();
  }

  btnEditarBand(band:any = null) {
    this.showEditForm = !this.showEditForm;
    if(band) {
      this.EditForm.patchValue(band);
    } 
  }

  editarBand() {
    this.listService.updateBand(this.EditForm.value);
    this.showEditForm = false;
  }

  deleteBand(band: any) {
    if(confirm(`¿Estás seguro que que quieres quitar de la lista la banda ${band.nombre}?`) === true) {
      this.listService.deleteBand(band);
    }
  }

  searchOnList() {
    if (this.search.value != ''){
      const resultado =  this.musicBands.filter((el:any)=>{
        return el.nombre.toUpperCase().indexOf(this.search.value.toUpperCase()) >= 0
    })

    this.musicBands = resultado

    } else {
      this.musicBands = this.listService.getAllBand();
    }  
  }

  ver_detalles(id:string)
  {
    this.listService.sendDetails(id)
  }
}

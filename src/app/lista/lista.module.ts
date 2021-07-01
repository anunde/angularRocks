import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { ListService } from '../services/listServices/list.service';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        ListaComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '',component: ListaComponent}])
    ],
    providers: [
        ListService
    ],
    bootstrap: [ListaComponent]
    })
export class ListaModule { }
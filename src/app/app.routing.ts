import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BandComponent } from './band/band.component';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule)},
    {path: 'band/:id', component: BandComponent},
    { path: '**', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{ }



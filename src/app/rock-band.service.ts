import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface RockBand {
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RockBandService {

  private rockBands: RockBand[];
  private rockBands$: Subject<RockBand[]>;

  constructor() {
    this.rockBands = [];
    this.rockBands$ = new Subject();
  }

  addRockBand(rockBand: RockBand) {
    this.rockBands.push(rockBand);
    this.rockBands$.next(this.rockBands);
  }

  getRockBands$(): Observable<RockBand[]> {
    return this.rockBands$.asObservable();
  }
}

import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/listServices/list.service';
import {Subscription} from 'rxjs'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  band: any;
  subscription: Subscription|null = null;

  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.band = this.listService.getOneBand(params.id);
      console.log(this.listService.rockBandsStorage);
    })
  }

  ngOnDestroy() {
  
  }
}

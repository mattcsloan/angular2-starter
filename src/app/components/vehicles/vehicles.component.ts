import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VehiclesService } from '../../services';
import { Vehicle } from '../../models';

@Component({
  selector: 'sw-vehicles',
  template: require('./vehicles.component.html'),
  styles: [
    require('./vehicles.component.scss')
  ],
  providers: [ VehiclesService ]
})
export class VehiclesComponent implements OnInit {
  public vehicles$: Observable<Vehicle[]>;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehicles$ = this.vehiclesService.getAll();
  }
}

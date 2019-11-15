import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AWESOME_SERVICE, AwesomeService } from './awesome-service.interface'; 

@Component({
  selector: 'app-awesome',
  template: '<p>awesome works from <strong>{{ from }}</strong>!</p>'
})
export class AwesomeComponent implements OnInit {

  from : string;

  constructor(
    @Optional()
    @Inject(AWESOME_SERVICE)
    private readonly awesomeService: AwesomeService,
  ) { }

  ngOnInit() {
    this.from = this.awesomeService.get('from');
  }

}
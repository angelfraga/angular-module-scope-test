import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AWESOME_SERVICE, AwesomeService } from './awesome-service.interface'; 
import { DefaultAwesomeService } from './default-awesome.service'; 

@Component({
  selector: 'app-awesome',
  template: '<p>awesome works from <strong>{{ from }}</strong>!</p>'
})
export class AwesomeComponent implements OnInit {

  from : string;

  constructor( 
    private readonly awesomeService: DefaultAwesomeService,
  ) { }

  ngOnInit() {
    this.from = this.awesomeService.get('from');
  }

}
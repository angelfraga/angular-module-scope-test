import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeModule, AWESOME_SERVICE, DefaultAwesomeService } from './../awesome';

import { ChildComponent } from './child.component';
import { CustomChildAwesomeService } from './custom-child-awesome.service';

@NgModule({
  imports: [
    CommonModule,
    AwesomeModule
  ],
  declarations: [ChildComponent],
  exports: [ChildComponent],
  // providers: [ { provide: DefaultAwesomeService , useClass: CustomChildAwesomeService  } ]
})
export class ChildModule { }
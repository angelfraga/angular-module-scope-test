import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeModule, AWESOME_SERVICE } from './../awesome';

import { ChildComponent } from './child.component';
import { CustomChildAwesomeService } from './custom-child-awesome.service';

@NgModule({
  imports: [
    CommonModule,
    AwesomeModule
    /**
     * 
     * AwesomeModule.forChild([
     *  { provide: AWESOME_SERVICE , useClass: CustomChildAwesomeService  }
     * ])
     */
  ],
  declarations: [ChildComponent],
  exports: [ChildComponent]
})
export class ChildModule { }
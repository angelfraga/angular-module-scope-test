import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AwesomeModule, AWESOME_SERVICE, DefaultAwesomeService } from './../awesome';

import { FeatureComponent } from './feature.component';
import { CustomFeatureAwesomeService } from './custom-feature-awesome.service';

@NgModule({
  imports: [
    CommonModule,
    AwesomeModule,
    RouterModule.forChild([
      { 
        path: '',
        component: FeatureComponent
      }
    ])
  ],
  declarations: [FeatureComponent],
  exports: [FeatureComponent],
  // providers: [ { provide: DefaultAwesomeService , useClass: CustomFeatureAwesomeService  } ]
})
export class FeatureModule { }
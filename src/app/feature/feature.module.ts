import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AwesomeModule, AWESOME_SERVICE } from './../awesome';

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
  providers: [ { provide: AWESOME_SERVICE , useClass: CustomFeatureAwesomeService  }],
  declarations: [FeatureComponent],
  exports: [FeatureComponent]
})
export class FeatureModule { }
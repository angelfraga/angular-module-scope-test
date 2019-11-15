import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AWESOME_SERVICE } from './awesome-service.interface';
import { DefaultAwesomeService } from './default-awesome.service';
import { AwesomeComponent } from './awesome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AwesomeComponent],
  exports: [
    AwesomeComponent
  ], 
  providers: [ { provide: AWESOME_SERVICE , useClass: DefaultAwesomeService  }]
})
export class AwesomeModule {

  static forRoot(): ModuleWithProviders<AwesomeModule> {
    return {
      ngModule: AwesomeModule
    }
  }

  static forChild(): ModuleWithProviders<AwesomeModule> {
    return {
      ngModule: AwesomeModule
    }
  }
}
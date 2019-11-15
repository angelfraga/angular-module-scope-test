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
  providers: [
    { provide: AWESOME_SERVICE, useClass: DefaultAwesomeService}
  ],
  exports: [
    AwesomeComponent
  ]
})
export class AwesomeModule {

  static forRoot(): ModuleWithProviders<AwesomeModule> {
    return {
      ngModule: AwesomeModule
    }
  }

  static forChild(childProviders: Provider[]): ModuleWithProviders<AwesomeModule> {
    return {
      ngModule: AwesomeModule,
      providers: [
        ...childProviders
      ]
    }
  }
}
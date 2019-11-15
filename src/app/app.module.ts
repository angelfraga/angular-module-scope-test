import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AwesomeModule, AWESOME_SERVICE, DefaultAwesomeService } from './awesome';

import { AppComponent } from './app.component';
import { CustomRootAwesomeService } from './custom-root-awesome.service';

import { ChildModule } from './child/child.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, 
    AwesomeModule,
    ChildModule, 
    RouterModule.forRoot([
      { 
        path: 'feature', 
        loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule)
      },
      { path: '',   redirectTo: 'feature', pathMatch: 'full' },
    ])
  ], 
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ { provide: DefaultAwesomeService , useClass: CustomRootAwesomeService  }]
})
export class AppModule { }

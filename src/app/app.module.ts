import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AwesomeModule, AWESOME_SERVICE } from './awesome';

import { AppComponent } from './app.component';
import { CustomRootAwesomeService } from './custom-root-awesome.service';

import { ChildModule } from './child/child.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AwesomeModule,
    /**
     *  If 
     *  AwesomeModule.forRoot([
     *    { provide: AWESOME_SERVICE , useClass: CustomRootAwesomeService  }
     *  ]),
     */
    ChildModule, 
    RouterModule.forRoot([
      { 
        path: 'feature', 
        loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule)
      },
      { path: '',   redirectTo: 'feature', pathMatch: 'full' },
    ])
  ], 
  providers: [
    { provide: AWESOME_SERVICE , useClass: CustomRootAwesomeService  }
  ], 
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

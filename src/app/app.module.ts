import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteoneComponent } from './routeone/routeone.component';
import { RoutetwoComponent } from './routetwo/routetwo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FormsModule } from '@angular/forms';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { StudentService } from './services/student.service';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
@NgModule({
  providers: [StudentService],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: 'parent-child', component: ParentComponent },
        { path: 'child-parent', component: StateComponent },
        { path: '**', redirectTo: '/routetwo' }
      ]
    )
  ],
  declarations: [
    AppComponent,
    RouteoneComponent,
    RoutetwoComponent,
    ParentComponent,
    ChildComponent,
    StateComponent,
    CityComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

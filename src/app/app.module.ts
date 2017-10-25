import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AboutusComponent } from './components/aboutus/aboutus.component'

const appRoutes:Routes =[
  {path:"", component:AboutmeComponent},
  {path:"angular", component:UserComponent},
  {path:"aboutus", component:AboutusComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutmeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ GetphotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

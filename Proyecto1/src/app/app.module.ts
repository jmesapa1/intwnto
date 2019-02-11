import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importo el componente y el servicio de conexion a base de datos 
import { TodoComponent } from './components/login-singup/login.component';
import {TodoService} from './services/login.service'
//firebase
import{AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';


import * as firebase from 'firebase';

//importo envioriment que contiene las credenciales apra ingresar a firebase
import{environment} from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import {HomeService} from './services/home.service'

//ruteo luego de hacer loggin 
import {RouterModule,Routes, Router} from '@angular/router';

//tabs
import { IgxTabsModule } from 'igniteui-angular';

//maps
import { AgmCoreModule } from '@agm/core';

const appRoutes:Routes=[
  {path:'',
component:TodoComponent}
  ,{
  path:'home',
  component:HomeComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    IgxTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAClgow-g2_XeQd-yNuUooatWUJ8wakzE8'
    })
    
  ],
  providers: [

    TodoService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

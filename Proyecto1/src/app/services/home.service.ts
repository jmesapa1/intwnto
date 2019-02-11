import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList,} from 'angularfire2/database';
import {TodoService} from './login.service';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  listaRutas: AngularFireList<any>;
  DetalleRuta: AngularFireList<any>;
  latitudRuta: AngularFireList<any>;
  longitudRuta: AngularFireList<any>;
  
  constructor(public firebasedb: AngularFireDatabase,public afAuth: AngularFireAuth) { }
  
  getListaRutas(){
      var usuario;
      usuario=new String(this.afAuth.auth.currentUser.email);
      console.log('EL USUARIO QUE ENTRO ES !!   ',usuario);
      usuario=usuario.replace("@", "0");
      usuario=usuario.replace(".", "0");
      this.listaRutas=this.firebasedb.list('Usuarios/'+usuario+'/Rutas');
      console.log('Usuarios/'+usuario+'/Rutas');
      
      return this.listaRutas;
  }
  getDetalleRutas(ruta){
    var usuario;
    var aux;
    usuario=new String(this.afAuth.auth.currentUser.email);
    
    
    usuario=usuario.replace("@", "0");
    usuario=usuario.replace(".", "0");
      

    this.DetalleRuta=this.firebasedb.list('Usuarios/'+usuario+'/Rutas/'+ruta);
 return this.DetalleRuta;
  }

  getLatitudRuta(ruta){

    var usuario;
    
    usuario= new String(this.afAuth.auth.currentUser.email);
    usuario=usuario.replace("@", "0");
    usuario=usuario.replace(".", "0");
    this.latitudRuta=this.firebasedb.list('Usuarios/'+usuario+'/Rutas/'+ruta+'/latitud');
    return this.latitudRuta;
  }

  getLongitudRuta(ruta){

    var usuario;
  
    usuario= new String(this.afAuth.auth.currentUser.email);
    usuario=usuario.replace("@", "0");
    usuario=usuario.replace(".", "0");
    this.longitudRuta=this.firebasedb.list('Usuarios/'+usuario+'/Rutas/'+ruta+'/longitud');
    
    return this.longitudRuta;
  }
}

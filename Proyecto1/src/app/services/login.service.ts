import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList,} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoList: AngularFireList<any>;

  constructor(public firebasedb: AngularFireDatabase,public afAuth: AngularFireAuth,private router:Router) { }


  getTodoList(){
    this.todoList=this.firebasedb.list('Usuarios');
    return this.todoList;
  }
  addTodo(title : string){
    this.todoList.push({
      title:title,
      isCheked:false
    });
  }
  updateTodo($key:string,flag:boolean){
    this.todoList.update($key,{isCheked:flag});
  }
  removeTodo($key:string){
    this.todoList.remove($key);
  }



  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( value =>  {
        this.router.navigate(['/home']);
      console.log('Inicio sesion ', value);
       
    
    
      })
     
      .catch(err => {reject (err);
      
      })});
    
  }



  logout() {
    return this.afAuth.auth.signOut();
  }


  dbCreacion(usuario:string){
    
    usuario=usuario.replace("@", "0");
    usuario=usuario.replace(".", "0");
   this.todoList.set(usuario,{
    Nombre:usuario

   });
  
  }



  emailSignup(usuario: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(usuario, password)
      .then(value => {
        console.log('se creo el usuario nuevo', value);
        //this.router.navigateByUrl('/profile');
        this.dbCreacion(usuario);   
      }
      )
      .catch(error => {
        console.log('error', error);
      });
  }
  
  
}

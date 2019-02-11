import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/login.service';

import {AngularFireAuth} from 'angularfire2/auth';

import {Router} from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class TodoComponent implements OnInit {
  todoListArray: any[];
  
  constructor(private todoService:TodoService,private angularFireAuth:AngularFireAuth,private router:Router) { }

  ngOnInit() {
    
    this.todoService.getTodoList().snapshotChanges()
      .subscribe(item => {
        this.todoListArray = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.todoListArray.push(x);
        });

    
      
      });

  }

  addTodo(itemTitle){
    //this.todoService.addTodo(itemTitle.value);
    //itemTitle.value=null;
  }
  
  loginEmail(usuario,contraseña) {
  
    this.todoService.loginEmail(usuario.value,contraseña.value);

   
  }
  emailSignup(usuario, contraseña) {
    this.todoService.emailSignup(usuario.value, contraseña.value);
  }
}

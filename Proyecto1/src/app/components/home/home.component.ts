import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3';
import * as Geofire from "geofire";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ListaDeRutas: any[];
  DetalleDeRuta: any[];
  markers : any[];
  aux:any[]
  protected map: any;
  lat: number = 6.217;
  lng: number = -75.567;
  horaInicial : any;
  horaFinal : any;

  clickFlag :boolean = false; 
  
  
  constructor(Geofire:Geofire,private HomeService:HomeService,private angularFireAuth:AngularFireAuth,) { }

  ngOnInit() {
      
     
    this.HomeService.getListaRutas().snapshotChanges()
    .subscribe(item => {
      this.ListaDeRutas= [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListaDeRutas.push(x);
      });

  
    
    });

    
    }
    addTodo(itemTitle){
      //this.todoService.addTodo(itemTitle.value);
      //itemTitle.value=null;
    }
   
   
   
   
   myFunction(nombre){
      this.markers=[];
      this.horaFinal="";
      console.log('el value es :'+nombre.value);
      this.HomeService.getDetalleRutas(nombre.value).snapshotChanges()
      .subscribe(item => {
        this.DetalleDeRuta= [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          
          this.DetalleDeRuta.push(x);
          
        });
        
        
        var i=0;
        for (let value of Object.values(this.DetalleDeRuta[0])) {
        
          
          this.markers[i]=value;
          i++;
        }
        console.log(this.DetalleDeRuta);
        const keys= Object.keys(this.markers);
        console.log(keys);
        console.log(this.markers);
        
      
          
          this.horaFinal=this.DetalleDeRuta[1];
         
          
          this.horaInicial=this.DetalleDeRuta[2];
          
        
        
    });
    
      
   


  }


}
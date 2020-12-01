import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticasBasicasPipes';
  name = 'yareli melinna'; 
  myArray =[1,2,3,4,5,6,7,8];
  PI = Math.PI;
  myNum = 0.1997;
  salary = 1200.99;
  Alumna = { 

    name: 'Yareli', 
    alias: 'Flaca', 
    song: 'Duelo', 
    skills: ['Estudiante de ingeneria Informatica'], 
    youtubeChannel: 'Fun With Flags', 
    address: {
       street: 'Ecatepec', 
       number: 55, 
       city: 'Mexico' 
       
      } 
    };
    myDate = new  Date();
    video = 'watch?v=NNJ4FVFvc2I';


}

import { Component } from '@angular/core';
import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options: any ={
    removeOnSpill:true
  };
  tasks:any[] =   [1, 2, 3, 4, 5];
  tasks2:any[] =  [6, 7, 8, 9, 10];
  tasks3:any[] =  [11, 12, 13, 14, 15];

  constructor(private dragulaService: DragulaService){
    dragulaService.setOptions('bag-task2', {
      copy:true,
      copySortSource:true
    });
  }

  mostrarTasks(){
    console.log(this.tasks);
    console.log(this.tasks2);
    console.log(this.tasks3);
  }

}

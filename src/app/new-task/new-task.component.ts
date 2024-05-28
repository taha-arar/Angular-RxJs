import { Component } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  
  constructor(private taskService : TaskService){}

  task : string;

  addTask(){
    this.taskService.clickedBtn(this.task);
  }

}

import { Component } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  constructor(private taskService : TaskService){}

  tasks  = this.taskService.getAllTasks();

  ngOnInit(){
    this.taskService.addTaskClicked.subscribe((value)=>{
        this.taskService.addNewTask(value);
          });
  }

  
}

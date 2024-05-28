import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks  : string[] = ['Task 1', 'Task 2', 'Task 3'];

  getAllTasks(){
     return this.tasks;
  }

  addNewTask(task : string){
    this.tasks.push(task);
  }

  //addTaskClicked : EventEmitter<string> = new EventEmitter<string>();

  addTaskClicked = new Subject<string>();

  clickedBtn(task : string){
    //this.addTaskClicked.emit(task);
    this.addTaskClicked.next(task);
  }

}

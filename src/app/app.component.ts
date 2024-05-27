import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRxJs';

  data : any [] = [];

  //Create an observable (event emiter)
  myObservable = new Observable((observer) =>{
    observer.next([1, 2, 3, 4, 5, 6, 7]);
  });

  //Subscribe to that observable
  getAsyncData(){
    //The observer (event listner)
    this.myObservable.subscribe((value : any) =>{
      this.data=value;
    });
  }
}

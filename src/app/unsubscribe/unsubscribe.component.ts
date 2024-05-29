import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';

@Component({
  selector: 'unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {

  counter = interval(1000);

  numbers  : number[]= [];

  subscriber;

  subscribe(){
    this.subscriber = this.counter.subscribe((value)=>{
      this.numbers.push(value);
    });

  }

  unsubscribe(){
    this.subscriber.unsubscribe();
    }

}

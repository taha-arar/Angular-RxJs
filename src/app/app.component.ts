import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';
import {map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRxJs';

//   data : any [] = [];

//   //Create an observable (event emiter)
//   // myObservable = new Observable((observer) =>{
//   //   //observer.next([1, 2, 3, 4, 5, 6, 7]);
//   //   observer.next(1);
//   //   observer.next(2);
//   //   observer.next(3);
//   //  // observer.error(new Error('An error has been occured..'));
//   //  observer.complete();
  


//   // });

//   array1 = [1, 2, 3, 4, 5, 6, 7];
//   array2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

//    //myObservable = of(this.array1, this.array2);  // it takes multiple and diffrent arrguments 

//   myObservable = from(this.array1);  //it takes only ine argument and it must be an iterable one like array , string  ...

//   transformedObs = this.myObservable.pipe(map((value) => {
//      return value*5;
//   }));

//   secondeObs = this.myObservable.pipe(filter((value) => {
//     return value%2===0;
//   }));

//   lastObs = this.myObservable
//   .pipe(map((x)=>{
//        return x*50;
//   }))
//   .pipe(filter((x)=>{
//     return x >= 250;
//   }));



//   @ViewChild('btn') button : ElementRef;


//   //Subscribe to that observable
//   getAsyncData(){
// //     //The observer (event listner)
// //     this.myObservable.subscribe((value : any) =>{ //handler
// //       //this.data=value;
// //       this.data.push(value);
// //     },
// //   (err) =>{
// //     alert(err.message);
// //   },
// // ()=>{
// //   alert('All the data has been streamed..');
// // });
 
// this.lastObs.subscribe({
//   next : (value : any) => {
//     this.data.push(value);
//   },
//   error(err){
//     alert(err.message);
//   },
//   complete(){
//     alert('All the data has been streamed..');
//   }
// })
//   }

// //   btnClicked(){
// //    this.btnObs =  fromEvent(this.button.nativeElement, 'click')
// //    .subscribe({
// //     next : (value : any)=>{
// //       console.log(value);
// //     }
// //    });
// //   }

// // ngAfterViewInit(){
// //   this.btnClicked();
// // }








}




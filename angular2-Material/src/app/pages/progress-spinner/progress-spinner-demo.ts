import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'progress-spinner-demo',
  templateUrl: 'progress-spinner-demo.html',
  styleUrls: ['progress-spinner-demo.scss'],
})
export class ProgressSpinnerDemo extends OnInit {
  progressValue: number = 40;

  step(val: number) {
    this.progressValue += val;
  }
  
   constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello Progress Spinner');
  }

}

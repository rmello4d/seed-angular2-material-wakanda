import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'baseline-demo',
  templateUrl: 'baseline-demo.html',
  styleUrls: ['baseline-demo.scss'],
})
export class BaselineDemo extends OnInit{
  name: string;
  
   constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello Baseline');
  }
}


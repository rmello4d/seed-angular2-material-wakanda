import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'slider-demo',
  templateUrl: 'slider-demo.html',
})
export class SliderDemo extends OnInit{
  demo: number;
  val: number = 50;
  min: number = 0;
  max: number = 100;
  disabledValue = 0;
  
  constructor() {}
  
  ngOnInit() {
    console.log('Hello Slider');
  }  
  
}

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'switch-demo',
  templateUrl: 'slide-toggle-demo.html',
  styleUrls: ['slide-toggle-demo.scss'],
})
export class SlideToggleDemo extends OnInit{
  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }
  
  constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello SlideToggle');
  }

}

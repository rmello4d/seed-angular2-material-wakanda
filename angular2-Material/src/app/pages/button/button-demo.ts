import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'button-demo',
  templateUrl: 'button-demo.html',
  styleUrls: ['button-demo.scss'],
})
export class ButtonDemo implements OnInit {
  isDisabled: boolean = false;
  clickCounter: number = 0;
  
  constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello Button');
  }
}



import {Component, ViewEncapsulation, OnInit} from '@angular/core';


@Component({
  selector: 'sidenav-demo',
  templateUrl: 'sidenav-demo.html',
  styleUrls: ['sidenav-demo.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavDemo extends OnInit {
  side = 'start';
  
  constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello Side Nav');
  }

}

import {Component, ViewChild, OnInit} from '@angular/core';
import {MdRipple} from '@angular/material';


@Component({
  selector: 'ripple-demo',
  templateUrl: 'ripple-demo.html',
  styleUrls: ['ripple-demo.scss'],
})
export class RippleDemo extends OnInit {
  @ViewChild(MdRipple) ripple: MdRipple;

  centered = false;
  disabled = false;
  unbounded = false;
  rounded = false;
  radius: number = null;
  rippleSpeed = 1;
  rippleColor = '';

  disableButtonRipples = false;

  doManualRipple() {
    if (this.ripple) {
      this.ripple.launch(0, 0, { centered: true });
    }
  }

 constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello Ripple');
  }

}

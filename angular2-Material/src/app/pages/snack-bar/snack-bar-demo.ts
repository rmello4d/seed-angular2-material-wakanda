import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

@Component({
  selector: 'snack-bar-demo',
  styleUrls: ['snack-bar-demo.scss'],
  templateUrl: 'snack-bar-demo.html',
  encapsulation: ViewEncapsulation.None,
})
export class SnackBarDemo extends OnInit {
  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 10000;
  addExtraClass: boolean = false;

  constructor(public snackBar: MdSnackBar) { }
  
  ngOnInit() {
  	console.log('Hello SnackBar');
  }

  open() {
    let config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }
}

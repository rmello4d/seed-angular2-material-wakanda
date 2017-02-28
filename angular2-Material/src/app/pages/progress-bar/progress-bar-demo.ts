import {Component, OnInit} from '@angular/core';


// TODO(josephperrott): Add an automatically filling example progress bar.

@Component({
  selector: 'progress-bar-demo',
  templateUrl: 'progress-bar-demo.html',
  styleUrls: ['progress-bar-demo.scss'],
})

export class ProgressBarDemo extends OnInit {
  determinateProgressValue: number = 30;
  bufferProgressValue: number = 30;
  bufferBufferValue: number = 40;
 
  constructor() {
    // Do stuff
  }
  
  ngOnInit() {
    console.log('Hello Progress bar');
  }


  stepDeterminateProgressVal(val: number) {
    this.determinateProgressValue += val;
  }

  stepBufferProgressVal(val: number) {
    this.bufferProgressValue += val;
  }

  stepBufferBufferVal(val: number) {
    this.bufferBufferValue += val;
  }
}

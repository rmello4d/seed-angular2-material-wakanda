import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'card-demo',
  templateUrl: 'card-demo.html',
  styleUrls: ['card-demo.scss'],
})

export class CardDemo implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Card');
  }
}



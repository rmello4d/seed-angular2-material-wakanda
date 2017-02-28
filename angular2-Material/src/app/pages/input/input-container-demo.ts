import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


let max = 5;

@Component({
  selector: 'input-container-demo',
  templateUrl: 'input-container-demo.html',
  styleUrls: ['input-container-demo.scss'],
})
export class InputContainerDemo extends OnInit {
  floatingLabel: string = 'auto';
  dividerColor: boolean;
  requiredField: boolean;
  ctrlDisabled = false;

  name: string;
  items: any[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
  ];
  rows = 8;
  formControl = new FormControl('hello', Validators.required);
  model = 'hello';

  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({ value: ++max });
    }
  }
  
  constructor() {}
  	
  ngOnInit() {
    console.log('Input Container');
  }
}

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'toolbar-demo',
  templateUrl: 'toolbar-demo.html',
  styleUrls: ['toolbar-demo.scss'],
})
export class ToolbarDemo extends OnInit {
	
	constructor(){}
	
	ngOnInit() {
		console.log ('Hello Toolbar');
	}

}

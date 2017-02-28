import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TooltipPosition} from '@angular/material';


@Component({
  selector: 'tooltip-demo',
  templateUrl: 'tooltip-demo.html',
  styleUrls: ['tooltip-demo.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // make sure tooltip also works OnPush
})
export class TooltipDemo {
  position: TooltipPosition = 'below';
  message: string = 'Here is the tooltip';
  showDelay = 0;
  hideDelay = 1000;
}

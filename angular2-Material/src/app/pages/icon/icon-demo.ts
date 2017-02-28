import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'md-icon-demo',
  templateUrl: 'icon-demo.html',
  styleUrls: ['icon-demo.scss'],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
})
export class IconDemo extends OnInit {
  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('thumb-up',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
        .addSvgIconSetInNamespace('core',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/core-icon-set.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }
  
  ngOnInit() {
    console.log('Hello Icon');
  }
  
  
}

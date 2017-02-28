import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardDemo } from './pages/card/card-demo';
import { ButtonDemo } from './pages/button/button-demo';
import { BaselineDemo } from './pages/baseline/baseline-demo';
import { AutocompleteDemo } from './pages/autocomplete/autocomplete-demo';
import { CheckboxDemo,MdCheckboxDemoNestedChecklist } from './pages/checkbox/checkbox-demo';
import { ChipsDemo } from './pages/chips/chips-demo';
import { GridListDemo } from './pages/grid-list/grid-list-demo';
import { IconDemo } from './pages/icon/icon-demo';
import { InputContainerDemo } from './pages/input/input-container-demo';
import { ListDemo } from './pages/list/list-demo';
import { ProgressBarDemo } from './pages/progress-bar/progress-bar-demo';
import { ProgressSpinnerDemo } from './pages/progress-spinner/progress-spinner-demo';
import { RadioDemo } from './pages/radio/radio-demo';
import { RippleDemo } from './pages/ripple/ripple-demo';
import { SelectDemo } from './pages/select/select-demo';
import { SidenavDemo } from './pages/sidenav/sidenav-demo';
import { SlideToggleDemo } from './pages/slide-toggle/slide-toggle-demo';
import { SliderDemo } from './pages/slider/slider-demo';
import { SnackBarDemo } from './pages/snack-bar/snack-bar-demo';
import { ToolbarDemo } from './pages/toolbar/toolbar-demo';
import { TooltipDemo } from './pages/tooltip/tooltip-demo';
import { DialogDemo, JazzDialog, ContentElementDialog, IFrameDialog } from './pages/dialog/dialog-demo';


import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CardDemo, 
    ButtonDemo,
    BaselineDemo, 
    AutocompleteDemo, 
    CheckboxDemo, MdCheckboxDemoNestedChecklist, 
    ChipsDemo, 
    GridListDemo, 
    IconDemo, 
    InputContainerDemo, 
    ListDemo, 
    ProgressBarDemo,
    ProgressSpinnerDemo, 
    RadioDemo, 
    RippleDemo, 
    SelectDemo, 
    SidenavDemo,
    SlideToggleDemo,
    SliderDemo,
    SnackBarDemo, 
    ToolbarDemo,
    TooltipDemo, 
    DialogDemo, JazzDialog, ContentElementDialog, IFrameDialog
    
  ],
  entryComponents: [
  	JazzDialog, 
    ContentElementDialog, 
    IFrameDialog
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CardDemo } from './pages/card/card-demo';
import { ButtonDemo } from './pages/button/button-demo';
import { BaselineDemo } from './pages/baseline/baseline-demo';
import { AutocompleteDemo } from './pages/autocomplete/autocomplete-demo';
import { CheckboxDemo } from './pages/checkbox/checkbox-demo';
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
import { DialogDemo } from './pages/dialog/dialog-demo';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CardDemo},
  { path: 'button', component: ButtonDemo},
  { path: 'baseline', component: BaselineDemo},
  { path: 'autocomplete', component: AutocompleteDemo},
  { path: 'checkbox', component: CheckboxDemo},
  { path: 'chips', component: ChipsDemo},
  { path: 'gridlist', component: GridListDemo},
  { path: 'icon', component: IconDemo},  
  { path: 'inputcontainer',  component: InputContainerDemo},
  { path: 'list',  component: ListDemo},
  { path: 'radio',  component: RadioDemo},
  { path: 'progressbar',  component: ProgressBarDemo}
  { path: 'progressspinner',  component: ProgressSpinnerDemo},
  { path: 'ripple',  component: RippleDemo},
  { path: 'select',  component: SelectDemo},  
  { path: 'sidenav',  component: SidenavDemo}, 
  { path: 'slidetoggle',  component: SlideToggleDemo}, 
  { path: 'slider',  component: SliderDemo}, 
  { path: 'snackbar',  component: SnackBarDemo}, 
  { path: 'toolbar',  component: ToolbarDemo}, 
  { path: 'tooltip',  component: TooltipDemo},
  { path: 'dialog',  component: DialogDemo},
  
];

export const routing = RouterModule.forRoot(routes);

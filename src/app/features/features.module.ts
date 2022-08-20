import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LmTitleComponent } from './components/lm-title/lm-title.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';
import { LmInputComponent } from './components/lm-input/lm-input.component';
import { LmButtonComponent } from './components/lm-button/lm-button.component';
import { LmTaskCardComponent } from './components/lm-task-card/lm-task-card.component';
import { LmIconButtonComponent } from './components/lm-icon-button/lm-icon-button.component';
import { LmCheckBoxComponent } from './components/lm-check-box/lm-check-box.component';

import { TooltipDirective } from '../shared/directives/tooltip.directive';


@NgModule({
  declarations: [
    LmTitleComponent,
    ToDoListComponent,
    LmInputComponent,
    LmButtonComponent,
    LmTaskCardComponent,
    LmIconButtonComponent,
    LmCheckBoxComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }

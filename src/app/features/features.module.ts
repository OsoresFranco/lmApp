import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LmTitleComponent } from './components/lm-title/lm-title.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';
import { LmInputComponent } from './components/lm-input/lm-input.component';
import { LmTaskCardComponent } from './components/lm-task-card/lm-task-card.component';
import { LmIconButtonComponent } from './components/lm-icon-button/lm-icon-button.component';
import { LmCheckBoxComponent } from './components/lm-check-box/lm-check-box.component';

import { TooltipDirective } from '../shared/directives/tooltip.directive';
import { HomeComponent } from './views/home/home.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    LmTitleComponent,
    ToDoListComponent,
    LmInputComponent,
    LmTaskCardComponent,
    LmIconButtonComponent,
    LmCheckBoxComponent,
    TooltipDirective,
    HomeComponent,
    TaskFormComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}

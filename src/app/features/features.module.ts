import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LmTitleComponent } from './components/lm-title/lm-title.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';
import { LmInputComponent } from './components/lm-input/lm-input.component';
import { LmButtonComponent } from './components/lm-button/lm-button.component';


@NgModule({
  declarations: [
    LmTitleComponent,
    ToDoListComponent,
    LmInputComponent,
    LmButtonComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }

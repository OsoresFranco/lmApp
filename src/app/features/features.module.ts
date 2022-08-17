import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LmTitleComponent } from './components/lm-title/lm-title.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    LmTitleComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }

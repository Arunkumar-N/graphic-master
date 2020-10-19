import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GroupByPipe } from './pipes/group-by.pipe';
@NgModule({
  declarations: [GroupByPipe],
  imports: [
    CommonModule,
    MatProgressBarModule
  ], exports: [GroupByPipe]
})
export class SharedModule { }

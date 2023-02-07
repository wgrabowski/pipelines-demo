import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumComponent } from './sum/sum.component';
import { UiModule } from '@pipelines-demo/ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, UiModule,FormsModule],
  declarations: [SumComponent],
  exports: [
    SumComponent
  ]
})
export class LogicModule {}

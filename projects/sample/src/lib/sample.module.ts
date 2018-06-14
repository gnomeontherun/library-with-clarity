import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { SampleComponent } from './sample.component';

@NgModule({
  imports: [
    ClarityModule
  ],
  declarations: [SampleComponent],
  exports: [SampleComponent]
})
export class SampleModule { }

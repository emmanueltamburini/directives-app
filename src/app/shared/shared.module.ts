import { NgModule } from '@angular/core';
import { ErrMessageDirective } from './directives/err-message.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrMessageDirective,
    CustomIfDirective
  ],
  exports: [
    ErrMessageDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }

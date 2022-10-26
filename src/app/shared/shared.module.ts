import { NgModule } from '@angular/core';
import { ErrMessageDirective } from './directives/err-message.directive';



@NgModule({
  declarations: [
    ErrMessageDirective
  ],
  exports: [
    ErrMessageDirective
  ]
})
export class SharedModule { }

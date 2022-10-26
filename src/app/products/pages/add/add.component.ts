import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  public color: string = 'red';

  public message: string = 'message';

  public form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  public hasError (field: string): boolean {
    return !!this.form.get(field)?.invalid;
  }

  public changeColor(): void {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

  public changeMessage(): void {
    this.message = Math.random().toString();
  }
}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errMessage]'
})
export class ErrMessageDirective implements OnInit {

  private _htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';

  private _message: string = 'This field is required'

  @Input('color')
  public set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input('message')
  public set message(value: string) {
    this._message = value;
    this.setMessage();
  }

  @Input('valid')
  public set valid(value: boolean) {
    if (value) {
      this._htmlElement.nativeElement.classList.add('hidden');
    } else {
      this._htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this._htmlElement =  element;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClasses();
  }

  setClasses(): void {
    this._htmlElement.nativeElement.classList.add('form-text');
  }


  setColor(): void {
    this._htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this._htmlElement.nativeElement.innerText = this._message;
  }

}

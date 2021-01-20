import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOPen = false;
  constructor() { }
  @HostListener ('click') toggleOpen(): void{
    this.isOPen = !this.isOPen;
  }
}

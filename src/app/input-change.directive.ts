import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInputChange]',
  host: {
    '(ngModelChange)': 'onChange($event)'
  }
})
export class InputChangeDirective {
  @Input() appInputChange: any;
  @Output() appInputChangeChange = new EventEmitter<any>();

  onChange(newValue: any) {
    this.appInputChange = newValue;
    this.appInputChangeChange.emit(this.appInputChange);
  }
}

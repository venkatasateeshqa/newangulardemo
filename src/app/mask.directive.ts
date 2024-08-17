import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {
@Input()
  inputData: string = '';

  maskData:string = '********;'

  constructor() { }

  @HostListener("mouseenter")
  mouseEnter(){
    console.log("enter into the mouse enter method"+this.maskData)
  }
  @HostListener("mouseleave")
  mouseOut(){
    console.log("enter into the mouse out method"+this.maskData)
  }

}

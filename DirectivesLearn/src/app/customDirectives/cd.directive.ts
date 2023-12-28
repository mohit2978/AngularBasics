import { Directive,OnInit,ElementRef,Input } from "@angular/core";

@Directive({
    selector : "[cdCustom]"
})
export class cdClass{
  @Input()  customClass:string|undefined;

  constructor(private ref:ElementRef){

  }
}
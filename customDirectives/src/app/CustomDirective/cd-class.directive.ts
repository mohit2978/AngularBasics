import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[cdClass]',
    standalone:true
})
export class cdDirective implements OnInit{
   @Input() csClass:string | undefined;

   constructor(private ref:ElementRef){}
    ngOnInit(): void {
       this.ref.nativeElement.classList.add(this.csClass);
    }
}
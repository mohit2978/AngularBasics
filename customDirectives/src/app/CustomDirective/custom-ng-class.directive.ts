import { Directive,  ElementRef,  Input,  OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomNgClass]',
  standalone: true
})
export class CustomNgClassDirective implements OnInit {

  @Input() csClass:string | undefined;

  constructor(private ref:ElementRef){
    this.ref.nativeElement.style.backgroundColor = 'yellow';
  }
   ngOnInit(): void {
      //console.log(this.csClass);
     // this.ref.nativeElement.classList.add(this.csClass);
   }
}

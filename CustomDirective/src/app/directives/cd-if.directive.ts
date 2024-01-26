import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
@Directive({
    selector:'[cdIf]',
})
export class cdIfClass implements OnInit{
    csif:boolean|undefined;
    constructor(private container:ViewContainerRef,private temp:TemplateRef<any>){}
    ngOnInit(): void {
        
    }
    updateView(){
        if(this.csif==true){
            this.container.createEmbeddedView(this.temp);
            console.log('this.csif',this.csif)
        }else{
            this.container.clear();
        }
    }
    @Input()
     set setCsIf(condition:boolean){
        this.csif=condition;
        this.updateView();
    }

}
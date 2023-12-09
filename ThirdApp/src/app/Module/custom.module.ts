import { NgModule } from '@angular/core';
import { TestComponent } from '../Component/TestComponent/test.component';
@NgModule({
    declarations: [ TestComponent ],
    exports:[TestComponent ],
    imports: [],
    providers: [],
    bootstrap: []
  })
  export class CustomTestModule { }
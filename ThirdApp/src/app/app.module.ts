import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Component/AboutComponent/about.component';
import { NavBarComponentComponent } from './Component/nav-bar-component/nav-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

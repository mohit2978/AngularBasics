import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

export const routes: Routes = [
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
];

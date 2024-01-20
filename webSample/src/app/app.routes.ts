import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { DetailComponent } from './components/detail/detail.component';
import { SpecComponent } from './components/spec/spec.component';
import { PriceComponent } from './components/price/price.component';

export const routes: Routes = [
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'product',component:ProductComponent,children:[
        {path:'detail',component:DetailComponent},
        {path:'spec',component:SpecComponent},
        {path:'price',component:PriceComponent}
    ]},
    {path:'profile/:id/:name',component:ProfileComponent},
    {path:'',redirectTo:'aboutus',pathMatch:'full'}

];

import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { DetailComponent } from './components/detail/detail.component';
import { SpecComponent } from './components/spec/spec.component';
import { PriceComponent } from './components/price/price.component';
import { ActivateGuard } from './guards/activate.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ResolveGuard } from './guards/resolve.guard';

export const routes: Routes = [
    {path:'aboutus',component:AboutusComponent,canDeactivate:[DeactivateGuard]},
    {path:'contactus',component:ContactusComponent,canActivate:[ActivateGuard]},
    {path:'product',component:ProductComponent,children:[
        {path:'detail',component:DetailComponent},
        {path:'spec',component:SpecComponent},
        {path:'price',component:PriceComponent}
    ],
    resolve:{data:ResolveGuard}
},
    {path:'profile/:id/:name',component:ProfileComponent},
    {path:'',redirectTo:'aboutus',pathMatch:'full'}

];

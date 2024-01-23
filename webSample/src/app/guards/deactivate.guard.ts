import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AboutusComponent } from "../components/aboutus/aboutus.component";

@Injectable({providedIn:'root'})
export class DeactivateGuard implements CanDeactivate<AboutusComponent>{
    canDeactivate(component: AboutusComponent, 
        currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot,
          nextState: RouterStateSnapshot)
          : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
            console.log("leaving page");
            
            return component.changesSaved;
    }
}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class ResolveGuard implements Resolve<any>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return "this is where we are";
    };
}
import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root',
    }
)
export class RandService{
    getrand(){
        return Math.random()*100;
    }
}
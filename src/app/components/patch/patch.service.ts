import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RoutePatchService {
    state:boolean = true;
    constructor() { }
    getState(){
        return this.state
    }
    changeState(){
        this.state = !this.state
    }
}
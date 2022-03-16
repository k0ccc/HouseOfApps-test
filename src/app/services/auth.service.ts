import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private isInside:boolean = !!localStorage.getItem('auth')

    login() {
        this.isInside = true;
    }
    logout() {
        this.isInside = false;
    }
    isAuth(): Promise<boolean> {
        return new Promise((resolve) => {
        resolve(this.isInside);
        });
  }
}
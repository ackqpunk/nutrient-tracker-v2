import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: '/Login'
})
export class LoginComponent {
    constructor(public router: Router) {

    }
    login(event : any) {
        this.router.navigate(['home']);
    }
}


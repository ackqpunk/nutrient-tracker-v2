
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'animal-choice',
    templateUrl: '/Animal/Choice'
})
export class AnimalChoiceComponent {
    constructor(public router: Router) {

    }
    goExisting() {
        this.router.navigate(['existing'])
    }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'existing-animal-list',
    templateUrl: '/Animal/Existing'
})
export class ExistingAnimalComponent {
    constructor(public router: Router) {
        
    }
    animals: any[] = mockAnimals;
    back() {
        this.router.navigate(['home']);
    } 
}

const mockAnimals = [
    {
        name: 'Ralph',
        type: 'Dog',
        breed: 'Beagle'
    },
    {
        name: 'Teddy',
        type: 'Dog',
        breed: 'Pit Bull'
    },
    {
        name: 'Lucy',
        type: 'Cat',
        breed: 'Shorthair'
    },
    {
        name: 'Simba',
        type: 'Cat',
        breed: 'Persian'
    },

];

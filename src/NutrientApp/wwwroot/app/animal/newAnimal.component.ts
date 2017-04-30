import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from './animal.model';

@Component({
    selector: 'new-animal',
    templateUrl: '/Animal/New'
})
export class NewAnimalComponent implements OnInit {
    animal: Animal = new Animal(); 
    
    constructor(public router: Router){}

    ngOnInit() {}
}
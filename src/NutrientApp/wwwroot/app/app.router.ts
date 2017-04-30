import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AnimalChoiceComponent } from './animal/animalChoice.component';
import { ExistingAnimalComponent } from './animal/existingAnimal.component';
import { NewAnimalComponent } from './animal/newAnimal.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: AnimalChoiceComponent },
    { path: 'newAnimal', component: NewAnimalComponent },
    { path: 'existing', component: ExistingAnimalComponent }
];
export const routedComponents = [LoginComponent, AnimalChoiceComponent, ExistingAnimalComponent, NewAnimalComponent]
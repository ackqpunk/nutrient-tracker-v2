import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashScreenComponent } from './splashScreen/splashScreen.component';

const routes: Routes = [
    { path: '', component: SplashScreenComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class SplashScreenRoutingModule { }

export const routedComponents = [SplashScreenComponent]
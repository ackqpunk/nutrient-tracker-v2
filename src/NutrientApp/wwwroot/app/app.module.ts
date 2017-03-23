import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';

import { routes, routedComponents } from './app.router';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes, {
        useHash: true
    }), GridModule ],
  declarations: [ AppComponent, routedComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

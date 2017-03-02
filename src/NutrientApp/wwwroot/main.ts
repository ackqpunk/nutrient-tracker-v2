import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { AppModule } from './app/app.module';
import { Router } from "@angular/router"
@NgModule({
    declarations: [],
    bootstrap: [AppComponent],
    providers: [],
    imports: []
})
class AppComponentModeul { }

platformBrowserDynamic().bootstrapModule(AppModule);

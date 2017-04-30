import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from "@angular/core";
import { AppModule } from './app/app.module';

import { routes, routedComponents } from './app/app.router';

platformBrowserDynamic().bootstrapModule(AppModule);

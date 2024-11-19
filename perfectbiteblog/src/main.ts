/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app/app.routes';
import { RouterOutlet, provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RouterOutlet, NgbModule),
        { provide: 'APP_ID', useValue: 'perfectbiteblog' },
        provideRouter(routes),
    ]
})
  .catch(err => console.log(err));

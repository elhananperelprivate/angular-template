import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {
  provideRouter,
  RouterFeatures,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
const routerProviderFeatures: RouterFeatures[] = [
  withEnabledBlockingInitialNavigation(),
  withComponentInputBinding(),
  withViewTransitions(),
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, ...routerProviderFeatures),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
    ),
    provideAnimationsAsync(),
    provideStore()
],
};

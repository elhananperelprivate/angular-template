import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  RouterFeatures,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
const routerProviderFeatures: RouterFeatures[] = [
  withEnabledBlockingInitialNavigation(),
  withComponentInputBinding(),
  withViewTransitions(),
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, ...routerProviderFeatures),
    provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};

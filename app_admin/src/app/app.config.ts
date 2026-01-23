import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideHttpClient(),
    authInterceptProvider
  ]
};

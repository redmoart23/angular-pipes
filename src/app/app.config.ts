import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es-CO';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      //useValue: 'es',
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale(),
    },
  ],
};

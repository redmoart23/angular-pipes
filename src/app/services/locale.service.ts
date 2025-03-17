import { Injectable, signal } from '@angular/core';

export type AvailableLocales = 'en' | 'es' | 'fr';

@Injectable({providedIn: 'root'})
export class LocaleService {

  constructor() {
      this.currentLocale.set(
        localStorage.getItem('locale') as AvailableLocales ?? 'es'
      );
   }

  private currentLocale = signal<AvailableLocales>('es');

  getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}

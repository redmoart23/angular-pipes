import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('redmoart');
  nameUpper = signal('REDMOART');
  fullName = signal('rEdmOArt');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setTimeout(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearTimeout(interval);
    });
  });

  changeLocale(locale: 'en' | 'es' | 'fr') {
    this.localeService.changeLocale(locale);
  }
}

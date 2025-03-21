import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'John Doe',
  gender: 'male',
  age: 31,
  address: 'Ottawa, ON, Canada',
};

const client2 = {
  name: 'Jane Doe',
  gender: 'female',
  age: 25,
  address: 'Toronto, ON, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18n select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };


  changeClient() {
    if (this.client() === client1) {
      this.client = signal(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18n plural
  clients = signal([
    'Maria',
    'John',
    'Jane',
    'Juan',
    'Pedro',
    'Luis',
    'Sara',
    'Diana',
    'Elena',
  ]);

  clientMap = signal({
    '=0': 'No hay clientes',
    '=1': 'Un cliente',
    other: '# clientes',
  });
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  profile = {
    name: 'John Doe',
    age: 31,
    address: 'Ottawa, ON, Canada',
  };

  //Async pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
      console.log('Promise finished');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap((value) => {
      console.log('Observable value', value);
    })
  )
}

import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
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
}

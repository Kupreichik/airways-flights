import { Component } from '@angular/core';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent {
  passengers = [{ title: 'Adult' }, { title: 'Child' }, { title: 'Infant' }];
}

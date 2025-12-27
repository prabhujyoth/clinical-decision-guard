import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientHeader } from './components/patient-header/patient-header';
import { OrderEntry } from './components/order-entry/order-entry';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PatientHeader, OrderEntry],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
}

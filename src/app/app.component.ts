import { Component } from '@angular/core';
import {IP, Network, Mask, Subnet } from './network';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  network: Network;
  constructor() {
    this.network = new Network();
  }
}


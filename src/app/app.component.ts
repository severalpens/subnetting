import { Component } from '@angular/core';
import {IP, Network, Mask, Subnet } from './network';
import { NetworkService } from './network.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }
}


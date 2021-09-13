import { Component, Input } from '@angular/core';
import { Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }
}



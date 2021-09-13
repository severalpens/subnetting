import { Component, OnInit } from '@angular/core';
import { Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.scss']
})
export class PreComponent {
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }

}

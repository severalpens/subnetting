import { Component, OnInit, Input } from '@angular/core';
import {  Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-subnets',
  templateUrl: './subnets.component.html',
  styleUrls: ['./subnets.component.scss']
})
export class SubnetsComponent {
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }

}

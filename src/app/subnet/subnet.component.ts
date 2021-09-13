import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.scss']
})
export class SubnetComponent   {
  network: Network;
  types: Array<string>;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
    this.types = new Array<string>();
    this.types.push("ip");
    this.types.push("mask");
    this.types.push("subnet");
  }

}

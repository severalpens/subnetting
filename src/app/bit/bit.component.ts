import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.scss']
})
export class BitComponent {
  @Input() bit!: number;
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }

}

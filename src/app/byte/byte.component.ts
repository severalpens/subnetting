import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-byte',
  templateUrl: './byte.component.html',
  styleUrls: ['./byte.component.scss']
})
export class ByteComponent {
  @Input() byte!: Array<number>;
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { NetworkProps, Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.css']
})
export class SubnetComponent implements OnInit {
  @Input() subnetId: number = 0;
  network: Network
  constructor(networkService: NetworkService) {
    this.network = networkService.network;
   }

  ngOnInit(): void {
    this.subnetId = 1;
  }

}

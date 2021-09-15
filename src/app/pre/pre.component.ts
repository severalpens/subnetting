import { Component, OnInit } from '@angular/core';
import { NetworkProps, Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.css']
})
export class PreComponent implements OnInit {
  network: Network
  constructor(networkService: NetworkService) {
    this.network = networkService.network;
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NetworkProps, Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  network: Network
  constructor(networkService: NetworkService) {
    this.network = networkService.network;
   }

  ngOnInit(): void {
  }

}

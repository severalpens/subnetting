import { Component, OnInit } from '@angular/core';
import { NetworkProps, Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  network: Network
  constructor(networkService: NetworkService) {
    this.network = networkService.network;
  }

  ngOnInit(): void {
  }

}

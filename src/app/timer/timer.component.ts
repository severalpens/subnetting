import { Component, OnInit } from '@angular/core';
import { Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent{
  network: Network;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;
  }


}

import { Component } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  ip: Network;
  constructor() {
    this.ip = new Network();
  }
}



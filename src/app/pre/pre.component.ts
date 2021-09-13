import { Component, OnInit } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.scss']
})
export class PreComponent {
  network: Network;
  constructor() {
    this.network = new Network();
  }

}

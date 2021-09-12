import { Component } from '@angular/core';
import * as internal from 'stream';
import { Ip } from './ip';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ip: Ip;
  constructor() {
    this.ip = new Ip();
  }
}


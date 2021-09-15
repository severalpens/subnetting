import { Injectable } from '@angular/core';
import { NetworkProps, Network } from './network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  network: Network
  constructor() {
    let props = new NetworkProps();
    this.network = new Network(props);
   }
}

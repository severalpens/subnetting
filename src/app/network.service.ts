import { Injectable } from '@angular/core';
import { Network } from './network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  network: Network;
  constructor() {
    this.network = new Network();
   }
}

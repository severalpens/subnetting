import { Injectable } from '@angular/core';
import { NetworkProps, Network } from './network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  props: NetworkProps;
  network: Network;
  constructor() {
    //let props = new NetworkProps([192,168,0,151],24,1);
    this.props = this.createRandomNetwork();
    this.network = new Network(this.props);
  }

  createRandomNetwork(){
     let props = new NetworkProps();
      props.ipIntegersArray  = new Array<number>()
      props.ipIntegersArray.push(Math.floor(Math.random() * 256));
      props.ipIntegersArray.push(Math.floor(Math.random() * 256));
      props.ipIntegersArray.push(Math.floor(Math.random() * 256));
      props.ipIntegersArray.push(Math.floor(Math.random() * 256));

      props.numberOfSubnets = Math.floor(Math.random() * 2) + 1;
    props.cidr = Math.floor(Math.random() * (32 - props.numberOfSubnets)) + 1;
    return props;
  }
   }

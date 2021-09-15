import { Mask } from "./mask";
import { NetworkIP } from "./network-ip";
import {IAddress} from "./interfaces";
import { SubnetAddress } from "./subnet-address";
import { Address } from "./abstract-classes";


export class NetworkProps{
  ipIntegersArray: Array<number> = [192,168,0,151];
  cidr: number = 24;
  numberOfSubnets: number = 1;

  constructor(ipIntegersArray?: Array<number>,cidr?: number, numberOfSubnets?: number){
    if(!ipIntegersArray){
      this.ipIntegersArray.push(Math.floor(Math.random() * 256));
      this.ipIntegersArray.push(Math.floor(Math.random() * 256));
      this.ipIntegersArray.push(Math.floor(Math.random() * 256));
      this.ipIntegersArray.push(Math.floor(Math.random() * 256));
    }
    else{
      this.ipIntegersArray = ipIntegersArray;
    }

    this.cidr = cidr ? cidr : Math.floor(Math.random() * 32);
    this.numberOfSubnets = numberOfSubnets ? numberOfSubnets : 1;
  }
}

export class Network{
  ip:IAddress;
  cidr: number;
  mask:IAddress;
  subnet:IAddress;
  networkAddress:IAddress;
  hostAddress:IAddress;
  broadcastAddress:IAddress;

  constructor(props:NetworkProps){
    this.ip = new NetworkIP(props.ipIntegersArray);
    this.cidr = props.cidr;
    this.mask = new Mask(this.cidr);
    this.subnet = new SubnetAddress(this.ip.ipBinaryArray,this.mask.ipBinaryArray);
    this.networkAddress = new Address;
    this.hostAddress = new Address;
    this.broadcastAddress  = new Address;
  }

}


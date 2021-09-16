import { Mask } from "./mask";
import { NetworkIP } from "./network-ip";
import {IAddress} from "./interfaces";
import { SubnetAddress } from "./subnet-address";
import { Address } from "./abstract-classes";
import { HostAddress } from "./host-address";
import { BroadcastAddress } from "./broadcast-address";
import { Subnet } from "./subnet";


export class NetworkProps{
  ipIntegersArray: Array<number> =[];
  cidr: number = 0;
  numberOfSubnets: number= 0;
}

export class Network{
  ip:IAddress;
  cidr: number;
  mask:IAddress;
  subnetAddress:IAddress;
  hostAddress:IAddress;
  broadcastAddress:IAddress;

  constructor(props:NetworkProps){
    this.ip = new NetworkIP(props.ipIntegersArray);
    this.cidr = props.cidr;
    this.mask = new Mask(this.cidr);

    this.subnetAddress  = new SubnetAddress(this.ip.ipBinaryArray,this.mask.ipBinaryArray);
    this.hostAddress = new HostAddress(this.ip.ipBinaryArray,this.mask.ipBinaryArray);
    this.broadcastAddress  = new BroadcastAddress(this.ip.ipBinaryArray,this.mask.ipBinaryArray);
  }

}


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
  subnets:Array<Subnet>;

  constructor(props:NetworkProps){
    this.ip = new NetworkIP(props.ipIntegersArray);
    this.cidr = props.cidr;
    this.mask = new Mask(this.cidr);
    this.subnets  = new Array<Subnet>();

    for (let i = 0; i < props.numberOfSubnets; i++) {
      this.subnets.push(new Subnet(i,this.ip, this.cidr, this.mask));
    }
  }

}


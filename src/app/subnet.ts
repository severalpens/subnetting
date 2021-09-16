import { Mask } from "./mask";
import { NetworkIP } from "./network-ip";
import {IAddress} from "./interfaces";
import { SubnetAddress } from "./subnet-address";
import { Address } from "./abstract-classes";
import { HostAddress } from "./host-address";
import { BroadcastAddress } from "./broadcast-address";


export class Subnet{
  id:number;

  constructor(id: number){
    this.id = id;
  }

}


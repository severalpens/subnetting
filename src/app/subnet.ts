import { Mask } from "./mask";
import { NetworkIP } from "./network-ip";
import {IAddress} from "./interfaces";
import { SubnetAddress } from "./subnet-address";
import { Address } from "./abstract-classes";
import { HostAddress } from "./host-address";
import { BroadcastAddress } from "./broadcast-address";




export class Subnet{
  id:number;
  ip:IAddress;
  cidr: number;
  mask:IAddress;
  subnetAddress:IAddress;
  hostAddress:IAddress;
  broadcastAddress:IAddress;

  constructor(id: number, ip: IAddress, cidr: number, mask: IAddress){
    this.id = id;
    this.ip = ip;
    this.cidr = cidr;
    this.mask = mask;
    this.subnetAddress  = new SubnetAddress(ip.ipBinaryArray,mask.ipBinaryArray);
    this.hostAddress = new HostAddress(ip.ipBinaryArray,mask.ipBinaryArray);
    this.broadcastAddress  = new BroadcastAddress(ip.ipBinaryArray,mask.ipBinaryArray);
  }

}


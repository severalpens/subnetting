import { IAddress } from "./interfaces";


export class HostAddress implements IAddress{
  arrIntBinaryOctets: Array<Array<number>>;
  ipBinaryArray: Array<number>;
  ipIntegersArray: Array<number>;
  ipBinaryString: string;
  strBinaryDisplay: string;
  strBinaryOctets: Array<string>;

  constructor(ip: Array<number>,mask: Array<number>){
    ip[31] = 1;
    this.arrIntBinaryOctets = new Array<Array<number>>();
    this.ipBinaryArray = new Array<number>();
    this.ipIntegersArray = new Array<number>();
    this.ipBinaryString = "";
    this.strBinaryOctets = new Array<string>();

    for (let i = 0; i < 32; i++) {
      this.ipBinaryArray.push(ip[i]);
      this.ipBinaryString += this.ipBinaryArray[i];
    }

    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(0,8));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(8,16));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(16,24));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(24,32));

    this.strBinaryOctets.push(this.ipBinaryString.slice(0,8));
    this.strBinaryOctets.push(this.ipBinaryString.slice(8,16));
    this.strBinaryOctets.push(this.ipBinaryString.slice(16,24));
    this.strBinaryOctets.push(this.ipBinaryString.slice(24,32));

    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[0],2));
    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[1],2));
    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[2],2));
    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[3],2));

    this.strBinaryDisplay = this.strBinaryOctets[0] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[1] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[2] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[3];

  }
}

